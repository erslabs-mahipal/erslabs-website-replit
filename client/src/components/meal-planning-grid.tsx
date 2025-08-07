import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { type TripMeal, type Meal } from "@shared/schema";

interface MealPlanningGridProps {
  tripId?: string;
  onGenerateShoppingList: () => void;
}

interface TripMealWithDetails extends TripMeal {
  meal: Meal;
}

const mealTypes = ["breakfast", "lunch", "dinner", "snack"];
const mealTypeLabels = {
  breakfast: "Breakfast",
  lunch: "Lunch", 
  dinner: "Dinner",
  snack: "Snacks"
};

const mealTypeColors = {
  breakfast: "bg-green-100 text-green-800",
  lunch: "bg-blue-100 text-blue-800",
  dinner: "bg-purple-100 text-purple-800",
  snack: "bg-yellow-100 text-yellow-800"
};

export default function MealPlanningGrid({ tripId, onGenerateShoppingList }: MealPlanningGridProps) {
  const { toast } = useToast();
  const [draggedMeal, setDraggedMeal] = useState<Meal | null>(null);

  const { data: tripMeals = [], isLoading } = useQuery<TripMealWithDetails[]>({
    queryKey: ["/api/trips", tripId, "meals"],
    enabled: !!tripId,
  });

  const removeMealMutation = useMutation({
    mutationFn: async ({ day, mealType }: { day: number; mealType: string }) => {
      const response = await apiRequest("DELETE", `/api/trips/${tripId}/meals?day=${day}&mealType=${mealType}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips", tripId, "meals"] });
      toast({
        title: "Meal removed successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error removing meal",
        variant: "destructive",
      });
    },
  });

  const addMealMutation = useMutation({
    mutationFn: async ({ mealId, day, mealType }: { mealId: string; day: number; mealType: string }) => {
      const response = await apiRequest("POST", `/api/trips/${tripId}/meals`, {
        mealId,
        day,
        mealType,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips", tripId, "meals"] });
      toast({
        title: "Meal added successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error adding meal",
        variant: "destructive",
      });
    },
  });

  const getMealForSlot = (day: number, mealType: string) => {
    return tripMeals.find(tm => tm.day === day && tm.mealType === mealType);
  };

  const handleDrop = (e: React.DragEvent, day: number, mealType: string) => {
    e.preventDefault();
    if (draggedMeal && tripId) {
      // Remove existing meal if any
      const existingMeal = getMealForSlot(day, mealType);
      if (existingMeal) {
        removeMealMutation.mutate({ day, mealType });
      }
      // Add new meal
      addMealMutation.mutate({
        mealId: draggedMeal.id,
        day,
        mealType,
      });
    }
    setDraggedMeal(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleRemoveMeal = (day: number, mealType: string) => {
    removeMealMutation.mutate({ day, mealType });
  };

  const getTripDuration = () => {
    // Get duration from trip data, defaulting to 3 days
    return 3; // This should come from trip data
  };

  const renderMealSlot = (day: number, mealType: string) => {
    const tripMeal = getMealForSlot(day, mealType);
    
    return (
      <div
        key={`${day}-${mealType}`}
        className="h-24 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center hover:border-primary transition-colors cursor-pointer relative"
        onDrop={(e) => handleDrop(e, day, mealType)}
        onDragOver={handleDragOver}
      >
        {tripMeal ? (
          <div className="text-center p-2 w-full relative">
            <div className="text-sm font-medium text-gray-900">{tripMeal.meal.name}</div>
            <div className="text-xs text-muted">{tripMeal.meal.calories} cal</div>
            <button
              onClick={() => handleRemoveMeal(day, mealType)}
              className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-500"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <span className="text-muted text-sm">+ Add meal</span>
        )}
      </div>
    );
  };

  if (!tripId) {
    return (
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Meal Planning</h2>
          <div className="text-center py-8 text-gray-500">
            Create a trip to start planning meals
          </div>
        </CardContent>
      </Card>
    );
  }

  const totalMeals = tripMeals.length;
  const maxMeals = getTripDuration() * mealTypes.length;

  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Meal Planning</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                List View
              </Button>
              <Button size="sm" className="btn-primary">
                Grid View
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="text-center py-8">Loading meal plan...</div>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-secondary">Meal Type</div>
                </div>
                {Array.from({ length: getTripDuration() }, (_, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-medium text-secondary">Day {i + 1}</div>
                    <div className="text-xs text-muted">Oct {15 + i}</div>
                  </div>
                ))}
              </div>

              {mealTypes.map((mealType) => (
                <div key={mealType} className="grid grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center justify-center h-24 text-sm font-medium text-secondary">
                    {mealTypeLabels[mealType as keyof typeof mealTypeLabels]}
                  </div>
                  {Array.from({ length: getTripDuration() }, (_, day) => 
                    renderMealSlot(day + 1, mealType)
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
          <div className="flex items-center justify-between">
            <div className="text-sm text-secondary">
              Total meals planned: <span className="font-medium text-gray-900">{totalMeals} of {maxMeals}</span>
            </div>
            <Button 
              onClick={onGenerateShoppingList}
              disabled={totalMeals === 0}
              className="btn-primary"
            >
              Generate Shopping List
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
