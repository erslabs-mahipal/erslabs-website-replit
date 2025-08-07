import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTripSchema, type Trip, type InsertTrip } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface TripSettingsProps {
  currentTrip: Trip | null;
  onTripCreated: (trip: Trip) => void;
}

const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "nut-free", label: "Nut-Free" },
];

const cookingEquipmentOptions = [
  "Backpacking Stove",
  "Campfire Only", 
  "Full Kitchen Setup",
  "No Cooking"
];

export default function TripSettings({ currentTrip, onTripCreated }: TripSettingsProps) {
  const { toast } = useToast();
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);

  const form = useForm<InsertTrip>({
    resolver: zodResolver(insertTripSchema),
    defaultValues: {
      name: "",
      duration: 3,
      groupSize: 4,
      cookingEquipment: "Backpacking Stove",
      dietaryPreferences: [],
    },
  });

  useEffect(() => {
    if (currentTrip) {
      form.reset({
        name: currentTrip.name,
        duration: currentTrip.duration,
        groupSize: currentTrip.groupSize,
        cookingEquipment: currentTrip.cookingEquipment,
        dietaryPreferences: currentTrip.dietaryPreferences,
      });
      setDietaryPreferences(currentTrip.dietaryPreferences || []);
    }
  }, [currentTrip, form]);

  const createTripMutation = useMutation({
    mutationFn: async (tripData: InsertTrip) => {
      const response = await apiRequest("POST", "/api/trips", tripData);
      return response.json();
    },
    onSuccess: (trip) => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips"] });
      onTripCreated(trip);
      toast({
        title: "Trip created successfully!",
        description: "You can now start planning meals for your adventure.",
      });
    },
    onError: () => {
      toast({
        title: "Error creating trip",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateTripMutation = useMutation({
    mutationFn: async (tripData: InsertTrip) => {
      if (!currentTrip) throw new Error("No current trip");
      const response = await apiRequest("PUT", `/api/trips/${currentTrip.id}`, tripData);
      return response.json();
    },
    onSuccess: (trip) => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips"] });
      onTripCreated(trip);
      toast({
        title: "Trip updated successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error updating trip",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleDietaryPreferenceChange = (preference: string, checked: boolean) => {
    const updated = checked 
      ? [...dietaryPreferences, preference]
      : dietaryPreferences.filter(p => p !== preference);
    setDietaryPreferences(updated);
    form.setValue("dietaryPreferences", updated);
  };

  const onSubmit = (data: InsertTrip) => {
    const tripData = { ...data, dietaryPreferences };
    if (currentTrip) {
      updateTripMutation.mutate(tripData);
    } else {
      createTripMutation.mutate(tripData);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Trip Settings</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trip Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter trip name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (days)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="1" 
                        max="30" 
                        {...field} 
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="groupSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group Size</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="1" 
                        max="20" 
                        {...field} 
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-3 block">
                Dietary Preferences
              </FormLabel>
              <div className="space-y-2">
                {dietaryOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={dietaryPreferences.includes(option.id)}
                      onCheckedChange={(checked) => 
                        handleDietaryPreferenceChange(option.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="cookingEquipment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cooking Equipment</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cooking equipment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cookingEquipmentOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={createTripMutation.isPending || updateTripMutation.isPending}
            >
              {currentTrip ? "Update Trip" : "Create Trip"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
