import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, json, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const trips = pgTable("trips", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  duration: integer("duration").notNull(),
  groupSize: integer("group_size").notNull(),
  cookingEquipment: text("cooking_equipment").notNull(),
  dietaryPreferences: json("dietary_preferences").$type<string[]>().notNull().default([]),
});

export const meals = pgTable("meals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // breakfast, lunch, dinner, snack
  calories: integer("calories").notNull(),
  cookTime: integer("cook_time").notNull(), // in minutes
  weight: real("weight").notNull(), // in ounces
  cost: real("cost").notNull(), // estimated cost
  dietaryTags: json("dietary_tags").$type<string[]>().notNull().default([]), // vegetarian, vegan, gluten-free, etc.
  ingredients: json("ingredients").$type<{name: string, quantity: string, category: string}[]>().notNull().default([]),
  instructions: text("instructions").notNull(),
  servings: integer("servings").notNull(),
});

export const tripMeals = pgTable("trip_meals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  tripId: varchar("trip_id").notNull(),
  mealId: varchar("meal_id").notNull(),
  day: integer("day").notNull(),
  mealType: text("meal_type").notNull(),
});

export const shoppingLists = pgTable("shopping_lists", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  tripId: varchar("trip_id").notNull(),
  items: json("items").$type<{name: string, quantity: string, category: string, purchased: boolean}[]>().notNull().default([]),
  totalCost: real("total_cost").notNull(),
});

export const insertTripSchema = createInsertSchema(trips).omit({
  id: true,
});

export const insertMealSchema = createInsertSchema(meals).omit({
  id: true,
});

export const insertTripMealSchema = createInsertSchema(tripMeals).omit({
  id: true,
});

export const insertShoppingListSchema = createInsertSchema(shoppingLists).omit({
  id: true,
});

export type InsertTrip = z.infer<typeof insertTripSchema>;
export type Trip = typeof trips.$inferSelect;
export type InsertMeal = z.infer<typeof insertMealSchema>;
export type Meal = typeof meals.$inferSelect;
export type InsertTripMeal = z.infer<typeof insertTripMealSchema>;
export type TripMeal = typeof tripMeals.$inferSelect;
export type InsertShoppingList = z.infer<typeof insertShoppingListSchema>;
export type ShoppingList = typeof shoppingLists.$inferSelect;
