import { type Trip, type InsertTrip, type Meal, type InsertMeal, type TripMeal, type InsertTripMeal, type ShoppingList, type InsertShoppingList } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Trip operations
  createTrip(trip: InsertTrip): Promise<Trip>;
  getTrip(id: string): Promise<Trip | undefined>;
  getAllTrips(): Promise<Trip[]>;
  updateTrip(id: string, updates: Partial<InsertTrip>): Promise<Trip | undefined>;
  deleteTrip(id: string): Promise<boolean>;
  
  // Meal operations
  createMeal(meal: InsertMeal): Promise<Meal>;
  getMeal(id: string): Promise<Meal | undefined>;
  getAllMeals(): Promise<Meal[]>;
  getMealsByType(type: string): Promise<Meal[]>;
  getMealsByDietaryTags(tags: string[]): Promise<Meal[]>;
  searchMeals(query: string): Promise<Meal[]>;
  
  // Trip meal operations
  addMealToTrip(tripMeal: InsertTripMeal): Promise<TripMeal>;
  getTripMeals(tripId: string): Promise<TripMeal[]>;
  removeMealFromTrip(tripId: string, day: number, mealType: string): Promise<boolean>;
  
  // Shopping list operations
  createShoppingList(shoppingList: InsertShoppingList): Promise<ShoppingList>;
  getShoppingList(tripId: string): Promise<ShoppingList | undefined>;
  updateShoppingList(tripId: string, updates: Partial<InsertShoppingList>): Promise<ShoppingList | undefined>;
}

export class MemStorage implements IStorage {
  private trips: Map<string, Trip>;
  private meals: Map<string, Meal>;
  private tripMeals: Map<string, TripMeal>;
  private shoppingLists: Map<string, ShoppingList>;

  constructor() {
    this.trips = new Map();
    this.meals = new Map();
    this.tripMeals = new Map();
    this.shoppingLists = new Map();
    this.initializeSampleMeals();
  }

  private initializeSampleMeals() {
    const sampleMeals: InsertMeal[] = [
      {
        name: "Instant Oatmeal & Berries",
        description: "Quick-cooking oats with dried berries and nuts",
        type: "breakfast",
        calories: 420,
        cookTime: 5,
        weight: 4.2,
        cost: 3.50,
        dietaryTags: ["gluten-free", "vegetarian"] as string[],
        ingredients: [
          { name: "Instant Oats", quantity: "1 cup", category: "Grains & Cereals" },
          { name: "Dried Berries Mix", quantity: "1/4 cup", category: "Produce" },
          { name: "Mixed Nuts", quantity: "2 tbsp", category: "Proteins" }
        ],
        instructions: "Add hot water to oats, stir in berries and nuts. Let sit for 2 minutes.",
        servings: 1
      },
      {
        name: "Quinoa Power Salad",
        description: "Protein-rich quinoa with vegetables and tahini dressing",
        type: "lunch",
        calories: 450,
        cookTime: 15,
        weight: 6.8,
        cost: 5.25,
        dietaryTags: ["vegan", "gluten-free"],
        ingredients: [
          { name: "Quinoa", quantity: "1/2 cup", category: "Grains & Cereals" },
          { name: "Dehydrated Vegetables", quantity: "1/4 cup", category: "Produce" },
          { name: "Tahini", quantity: "2 tbsp", category: "Condiments" }
        ],
        instructions: "Cook quinoa, rehydrate vegetables, mix with tahini dressing.",
        servings: 1
      },
      {
        name: "Dehydrated Pasta Primavera",
        description: "Lightweight pasta with dried vegetables and herbs",
        type: "dinner",
        calories: 680,
        cookTime: 20,
        weight: 8.5,
        cost: 4.75,
        dietaryTags: ["vegetarian"],
        ingredients: [
          { name: "Whole Wheat Pasta", quantity: "2 oz", category: "Grains & Cereals" },
          { name: "Dehydrated Vegetables", quantity: "1/2 cup", category: "Produce" },
          { name: "Olive Oil", quantity: "1 tbsp", category: "Condiments" }
        ],
        instructions: "Cook pasta, rehydrate vegetables, combine with olive oil and herbs.",
        servings: 1
      },
      {
        name: "Trail Mix Energy Bites",
        description: "No-bake energy balls with dates, nuts, and seeds",
        type: "snack",
        calories: 240,
        cookTime: 0,
        weight: 2.1,
        cost: 2.25,
        dietaryTags: ["vegan", "gluten-free"],
        ingredients: [
          { name: "Dates", quantity: "4 pieces", category: "Produce" },
          { name: "Mixed Nuts", quantity: "1/4 cup", category: "Proteins" },
          { name: "Seeds Mix", quantity: "1 tbsp", category: "Proteins" }
        ],
        instructions: "Pre-made energy bites, ready to eat.",
        servings: 1
      },
      {
        name: "Granola Mix",
        description: "Homemade granola with oats, nuts, and dried fruit",
        type: "breakfast",
        calories: 380,
        cookTime: 0,
        weight: 3.5,
        cost: 2.80,
        dietaryTags: ["vegetarian"],
        ingredients: [
          { name: "Granola", quantity: "1/2 cup", category: "Grains & Cereals" },
          { name: "Dried Fruit", quantity: "2 tbsp", category: "Produce" }
        ],
        instructions: "Ready to eat granola mix.",
        servings: 1
      },
      {
        name: "Lentil Curry",
        description: "Spiced red lentils with curry powder",
        type: "dinner",
        calories: 590,
        cookTime: 25,
        weight: 7.2,
        cost: 4.20,
        dietaryTags: ["vegan", "gluten-free"],
        ingredients: [
          { name: "Red Lentils", quantity: "1/2 cup", category: "Proteins" },
          { name: "Curry Powder", quantity: "1 tsp", category: "Spices" },
          { name: "Coconut Milk Powder", quantity: "2 tbsp", category: "Condiments" }
        ],
        instructions: "Cook lentils with spices, add coconut milk powder.",
        servings: 1
      }
    ];

    sampleMeals.forEach(meal => {
      this.createMeal(meal);
    });
  }

  // Trip operations
  async createTrip(insertTrip: InsertTrip): Promise<Trip> {
    const id = randomUUID();
    const trip: Trip = { ...insertTrip, id };
    this.trips.set(id, trip);
    return trip;
  }

  async getTrip(id: string): Promise<Trip | undefined> {
    return this.trips.get(id);
  }

  async getAllTrips(): Promise<Trip[]> {
    return Array.from(this.trips.values());
  }

  async updateTrip(id: string, updates: Partial<InsertTrip>): Promise<Trip | undefined> {
    const trip = this.trips.get(id);
    if (!trip) return undefined;
    
    const updatedTrip = { ...trip, ...updates };
    this.trips.set(id, updatedTrip);
    return updatedTrip;
  }

  async deleteTrip(id: string): Promise<boolean> {
    return this.trips.delete(id);
  }

  // Meal operations
  async createMeal(insertMeal: InsertMeal): Promise<Meal> {
    const id = randomUUID();
    const meal: Meal = { ...insertMeal, id };
    this.meals.set(id, meal);
    return meal;
  }

  async getMeal(id: string): Promise<Meal | undefined> {
    return this.meals.get(id);
  }

  async getAllMeals(): Promise<Meal[]> {
    return Array.from(this.meals.values());
  }

  async getMealsByType(type: string): Promise<Meal[]> {
    return Array.from(this.meals.values()).filter(meal => meal.type === type);
  }

  async getMealsByDietaryTags(tags: string[]): Promise<Meal[]> {
    return Array.from(this.meals.values()).filter(meal => 
      tags.some(tag => meal.dietaryTags.includes(tag))
    );
  }

  async searchMeals(query: string): Promise<Meal[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.meals.values()).filter(meal =>
      meal.name.toLowerCase().includes(lowercaseQuery) ||
      meal.description.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Trip meal operations
  async addMealToTrip(insertTripMeal: InsertTripMeal): Promise<TripMeal> {
    const id = randomUUID();
    const tripMeal: TripMeal = { ...insertTripMeal, id };
    this.tripMeals.set(id, tripMeal);
    return tripMeal;
  }

  async getTripMeals(tripId: string): Promise<TripMeal[]> {
    return Array.from(this.tripMeals.values()).filter(tm => tm.tripId === tripId);
  }

  async removeMealFromTrip(tripId: string, day: number, mealType: string): Promise<boolean> {
    const tripMealEntry = Array.from(this.tripMeals.entries()).find(([_, tm]) => 
      tm.tripId === tripId && tm.day === day && tm.mealType === mealType
    );
    
    if (tripMealEntry) {
      this.tripMeals.delete(tripMealEntry[0]);
      return true;
    }
    return false;
  }

  // Shopping list operations
  async createShoppingList(insertShoppingList: InsertShoppingList): Promise<ShoppingList> {
    const id = randomUUID();
    const shoppingList: ShoppingList = { ...insertShoppingList, id };
    this.shoppingLists.set(id, shoppingList);
    return shoppingList;
  }

  async getShoppingList(tripId: string): Promise<ShoppingList | undefined> {
    return Array.from(this.shoppingLists.values()).find(sl => sl.tripId === tripId);
  }

  async updateShoppingList(tripId: string, updates: Partial<InsertShoppingList>): Promise<ShoppingList | undefined> {
    const shoppingList = Array.from(this.shoppingLists.values()).find(sl => sl.tripId === tripId);
    if (!shoppingList) return undefined;
    
    const updatedShoppingList = { ...shoppingList, ...updates };
    this.shoppingLists.set(shoppingList.id, updatedShoppingList);
    return updatedShoppingList;
  }
}

export const storage = new MemStorage();
