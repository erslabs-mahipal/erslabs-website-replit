import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { type TripMeal, type Meal } from "@shared/schema";

interface NutritionOverviewProps {
  tripId?: string;
}

interface TripMealWithDetails extends TripMeal {
  meal: Meal;
}

export default function NutritionOverview({ tripId }: NutritionOverviewProps) {
  const { data: tripMeals = [] } = useQuery<TripMealWithDetails[]>({
    queryKey: ["/api/trips", tripId, "meals"],
    enabled: !!tripId,
  });

  const calculateNutrition = () => {
    if (!tripMeals.length) {
      return {
        dailyCalories: 0,
        totalWeight: 0,
        costEstimate: 0,
      };
    }

    const totalCalories = tripMeals.reduce((sum, tm) => sum + tm.meal.calories, 0);
    const totalWeight = tripMeals.reduce((sum, tm) => sum + tm.meal.weight, 0);
    const totalCost = tripMeals.reduce((sum, tm) => sum + tm.meal.cost, 0);
    
    // Get unique days to calculate daily average
    const uniqueDays = new Set(tripMeals.map(tm => tm.day));
    const dayCount = uniqueDays.size || 1;

    return {
      dailyCalories: Math.round(totalCalories / dayCount),
      totalWeight: Math.round(totalWeight * 10) / 10,
      costEstimate: Math.round(totalCost),
    };
  };

  const nutrition = calculateNutrition();

  if (!tripId) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Overview</h3>
          <div className="text-center py-4 text-gray-500">
            Create a trip to view nutrition information
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Overview</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary">Calories/Day</span>
            <span className="font-medium text-gray-900">
              {nutrition.dailyCalories.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary">Total Weight</span>
            <span className="font-medium text-gray-900">{nutrition.totalWeight} lbs</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary">Cost Estimate</span>
            <span className="font-medium text-gray-900">${nutrition.costEstimate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
