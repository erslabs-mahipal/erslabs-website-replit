import { useState } from "react";
import Header from "@/components/header";
import TripSettings from "@/components/trip-settings";
import MealPlanningGrid from "@/components/meal-planning-grid";
import MealDatabase from "@/components/meal-database";
import ShoppingListModal from "@/components/shopping-list-modal";
import NutritionOverview from "@/components/nutrition-overview";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { type Trip } from "@shared/schema";

export default function Dashboard() {
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);

  const handleCreateNewTrip = () => {
    setCurrentTrip(null);
  };

  const handleTripCreated = (trip: Trip) => {
    setCurrentTrip(trip);
  };

  const handleGenerateShoppingList = () => {
    setIsShoppingListOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Plan Your Adventure</h1>
              <p className="mt-2 text-secondary">Create meal plans for your outdoor trips and generate shopping lists</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button onClick={handleCreateNewTrip} className="btn-primary flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>New Trip</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <TripSettings currentTrip={currentTrip} onTripCreated={handleTripCreated} />
            <NutritionOverview tripId={currentTrip?.id} />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <MealPlanningGrid 
              tripId={currentTrip?.id} 
              onGenerateShoppingList={handleGenerateShoppingList}
            />
            <MealDatabase tripId={currentTrip?.id} />
          </div>
        </div>

        <ShoppingListModal
          tripId={currentTrip?.id}
          open={isShoppingListOpen}
          onOpenChange={setIsShoppingListOpen}
        />
      </div>
    </div>
  );
}
