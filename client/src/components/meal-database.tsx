import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { type Meal } from "@shared/schema";

interface MealDatabaseProps {
  tripId?: string;
}

const mealTypeColors = {
  breakfast: "bg-green-100 text-green-800",
  lunch: "bg-blue-100 text-blue-800", 
  dinner: "bg-purple-100 text-purple-800",
  snack: "bg-yellow-100 text-yellow-800"
};

const dietaryTagColors = {
  vegetarian: "text-green-600",
  vegan: "text-green-600",
  "gluten-free": "text-green-600",
  "nut-free": "text-green-600"
};

const dietaryTagLabels = {
  vegetarian: "V",
  vegan: "V",
  "gluten-free": "GF", 
  "nut-free": "NF"
};

export default function MealDatabase({ tripId }: MealDatabaseProps) {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMealType, setSelectedMealType] = useState<string>("");
  const [draggedMeal, setDraggedMeal] = useState<Meal | null>(null);

  const { data: meals = [], isLoading } = useQuery<Meal[]>({
    queryKey: ["/api/meals", { search: searchQuery, type: selectedMealType }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);
      if (selectedMealType) params.append("type", selectedMealType);
      
      const response = await fetch(`/api/meals?${params}`);
      if (!response.ok) throw new Error("Failed to fetch meals");
      return response.json();
    },
  });

  const handleDragStart = (e: React.DragEvent, meal: Meal) => {
    setDraggedMeal(meal);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragEnd = () => {
    setDraggedMeal(null);
  };

  const filteredMeals = meals.filter(meal => {
    const matchesSearch = !searchQuery || 
      meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !selectedMealType || meal.type === selectedMealType;
    
    return matchesSearch && matchesType;
  });

  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Meal Database</h3>
            <button className="text-sm text-primary hover:text-primary-dark font-medium">
              View All →
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search meals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedMealType} onValueChange={setSelectedMealType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Meals" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Meals</SelectItem>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snacks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="text-center py-8">Loading meals...</div>
          ) : filteredMeals.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {searchQuery || selectedMealType ? "No meals found matching your criteria" : "No meals available"}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMeals.map((meal) => (
                <div
                  key={meal.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  draggable={!!tripId}
                  onDragStart={(e) => handleDragStart(e, meal)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{meal.name}</h4>
                      <p className="text-sm text-secondary mt-1">{meal.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${mealTypeColors[meal.type as keyof typeof mealTypeColors]}`}
                        >
                          {meal.type.charAt(0).toUpperCase() + meal.type.slice(1)}
                        </Badge>
                        <span className="text-xs text-muted">{meal.calories} cal</span>
                        <span className="text-xs text-muted">
                          {meal.cookTime === 0 ? "Ready" : `${meal.cookTime} min`}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <div className="flex space-x-1">
                        {meal.dietaryTags?.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-medium ${dietaryTagColors[tag as keyof typeof dietaryTagColors]}`}
                          >
                            {dietaryTagLabels[tag as keyof typeof dietaryTagLabels] || tag.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
