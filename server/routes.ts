import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTripSchema, insertMealSchema, insertTripMealSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Trip routes
  app.get("/api/trips", async (req, res) => {
    try {
      const trips = await storage.getAllTrips();
      res.json(trips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trips" });
    }
  });

  app.post("/api/trips", async (req, res) => {
    try {
      const tripData = insertTripSchema.parse(req.body);
      const trip = await storage.createTrip(tripData);
      res.json(trip);
    } catch (error) {
      res.status(400).json({ error: "Invalid trip data" });
    }
  });

  app.get("/api/trips/:id", async (req, res) => {
    try {
      const trip = await storage.getTrip(req.params.id);
      if (!trip) {
        return res.status(404).json({ error: "Trip not found" });
      }
      res.json(trip);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trip" });
    }
  });

  app.put("/api/trips/:id", async (req, res) => {
    try {
      const updates = insertTripSchema.partial().parse(req.body);
      const trip = await storage.updateTrip(req.params.id, updates);
      if (!trip) {
        return res.status(404).json({ error: "Trip not found" });
      }
      res.json(trip);
    } catch (error) {
      res.status(400).json({ error: "Invalid trip data" });
    }
  });

  app.delete("/api/trips/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteTrip(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Trip not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete trip" });
    }
  });

  // Meal routes
  app.get("/api/meals", async (req, res) => {
    try {
      const { type, search, dietaryTags } = req.query;
      let meals;

      if (search) {
        meals = await storage.searchMeals(search as string);
      } else if (type) {
        meals = await storage.getMealsByType(type as string);
      } else if (dietaryTags) {
        const tags = (dietaryTags as string).split(",");
        meals = await storage.getMealsByDietaryTags(tags);
      } else {
        meals = await storage.getAllMeals();
      }

      res.json(meals);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch meals" });
    }
  });

  app.post("/api/meals", async (req, res) => {
    try {
      const mealData = insertMealSchema.parse(req.body);
      const meal = await storage.createMeal(mealData);
      res.json(meal);
    } catch (error) {
      res.status(400).json({ error: "Invalid meal data" });
    }
  });

  app.get("/api/meals/:id", async (req, res) => {
    try {
      const meal = await storage.getMeal(req.params.id);
      if (!meal) {
        return res.status(404).json({ error: "Meal not found" });
      }
      res.json(meal);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch meal" });
    }
  });

  // Trip meals routes
  app.get("/api/trips/:tripId/meals", async (req, res) => {
    try {
      const tripMeals = await storage.getTripMeals(req.params.tripId);
      const mealsWithDetails = await Promise.all(
        tripMeals.map(async (tm) => {
          const meal = await storage.getMeal(tm.mealId);
          return { ...tm, meal };
        })
      );
      res.json(mealsWithDetails);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trip meals" });
    }
  });

  app.post("/api/trips/:tripId/meals", async (req, res) => {
    try {
      const tripMealData = insertTripMealSchema.parse({
        ...req.body,
        tripId: req.params.tripId
      });
      const tripMeal = await storage.addMealToTrip(tripMealData);
      res.json(tripMeal);
    } catch (error) {
      res.status(400).json({ error: "Invalid trip meal data" });
    }
  });

  app.delete("/api/trips/:tripId/meals", async (req, res) => {
    try {
      const { day, mealType } = req.query;
      if (!day || !mealType) {
        return res.status(400).json({ error: "Day and mealType are required" });
      }
      
      const removed = await storage.removeMealFromTrip(
        req.params.tripId,
        parseInt(day as string),
        mealType as string
      );
      
      if (!removed) {
        return res.status(404).json({ error: "Trip meal not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to remove meal from trip" });
    }
  });

  // Shopping list routes
  app.get("/api/trips/:tripId/shopping-list", async (req, res) => {
    try {
      const shoppingList = await storage.getShoppingList(req.params.tripId);
      if (!shoppingList) {
        return res.status(404).json({ error: "Shopping list not found" });
      }
      res.json(shoppingList);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch shopping list" });
    }
  });

  app.post("/api/trips/:tripId/shopping-list/generate", async (req, res) => {
    try {
      const tripMeals = await storage.getTripMeals(req.params.tripId);
      const trip = await storage.getTrip(req.params.tripId);
      
      if (!trip) {
        return res.status(404).json({ error: "Trip not found" });
      }

      const ingredientMap = new Map<string, { quantity: string; category: string }>();
      let totalCost = 0;

      for (const tripMeal of tripMeals) {
        const meal = await storage.getMeal(tripMeal.mealId);
        if (meal) {
          totalCost += meal.cost * trip.groupSize;
          
          meal.ingredients?.forEach(ingredient => {
            const existing = ingredientMap.get(ingredient.name);
            if (existing) {
              // Simple quantity aggregation (could be improved)
              ingredientMap.set(ingredient.name, {
                ...existing,
                quantity: `${ingredient.quantity} + ${existing.quantity}`
              });
            } else {
              ingredientMap.set(ingredient.name, {
                quantity: `${ingredient.quantity} x${trip.groupSize}`,
                category: ingredient.category
              });
            }
          });
        }
      }

      const items = Array.from(ingredientMap.entries()).map(([name, data]) => ({
        name,
        quantity: data.quantity,
        category: data.category,
        purchased: false
      }));

      const existingShoppingList = await storage.getShoppingList(req.params.tripId);
      
      if (existingShoppingList) {
        const updatedList = await storage.updateShoppingList(req.params.tripId, {
          items,
          totalCost
        });
        res.json(updatedList);
      } else {
        const newList = await storage.createShoppingList({
          tripId: req.params.tripId,
          items,
          totalCost
        });
        res.json(newList);
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to generate shopping list" });
    }
  });

  app.put("/api/trips/:tripId/shopping-list", async (req, res) => {
    try {
      const updates = req.body;
      const shoppingList = await storage.updateShoppingList(req.params.tripId, updates);
      if (!shoppingList) {
        return res.status(404).json({ error: "Shopping list not found" });
      }
      res.json(shoppingList);
    } catch (error) {
      res.status(400).json({ error: "Invalid shopping list data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
