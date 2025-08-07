import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { type ShoppingList } from "@shared/schema";

interface ShoppingListModalProps {
  tripId?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ShoppingItem {
  name: string;
  quantity: string;
  category: string;
  purchased: boolean;
}

export default function ShoppingListModal({ tripId, open, onOpenChange }: ShoppingListModalProps) {
  const { toast } = useToast();

  const { data: shoppingList, isLoading } = useQuery<ShoppingList>({
    queryKey: ["/api/trips", tripId, "shopping-list"],
    enabled: !!tripId && open,
  });

  const generateShoppingListMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", `/api/trips/${tripId}/shopping-list/generate`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips", tripId, "shopping-list"] });
      toast({
        title: "Shopping list generated successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Error generating shopping list",
        variant: "destructive",
      });
    },
  });

  const updateShoppingListMutation = useMutation({
    mutationFn: async (updatedItems: ShoppingItem[]) => {
      const response = await apiRequest("PUT", `/api/trips/${tripId}/shopping-list`, {
        items: updatedItems,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/trips", tripId, "shopping-list"] });
    },
  });

  const handleItemToggle = (itemIndex: number, purchased: boolean) => {
    if (!shoppingList) return;
    
    const updatedItems = [...(shoppingList.items || [])];
    updatedItems[itemIndex] = { ...updatedItems[itemIndex], purchased };
    
    updateShoppingListMutation.mutate(updatedItems);
  };

  const handleGenerateList = () => {
    if (tripId) {
      generateShoppingListMutation.mutate();
    }
  };

  const groupedItems = shoppingList?.items?.reduce((groups, item) => {
    const category = item.category || "Other";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as Record<string, ShoppingItem[]>) || {};

  const totalItems = shoppingList?.items?.length || 0;
  const estimatedCost = shoppingList?.totalCost || 0;

  if (!tripId) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Shopping List</DialogTitle>
          </DialogHeader>
          <div className="p-6 text-center text-gray-500">
            Create a trip and add meals to generate a shopping list
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Shopping List
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-96 px-6">
          {isLoading ? (
            <div className="text-center py-8">Generating shopping list...</div>
          ) : !shoppingList ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No shopping list found for this trip</p>
              <Button onClick={handleGenerateList} disabled={generateShoppingListMutation.isPending}>
                Generate Shopping List
              </Button>
            </div>
          ) : Object.keys(groupedItems).length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Add meals to your trip to generate a shopping list</p>
              <Button onClick={handleGenerateList} disabled={generateShoppingListMutation.isPending}>
                Regenerate Shopping List
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-medium text-gray-900 mb-3">{category}</h3>
                  <div className="space-y-2">
                    {items.map((item, itemIndex) => {
                      const globalIndex = shoppingList.items?.findIndex(
                        globalItem => globalItem.name === item.name && globalItem.category === item.category
                      );
                      return (
                        <div
                          key={`${item.name}-${itemIndex}`}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              checked={item.purchased}
                              onCheckedChange={(checked) => 
                                handleItemToggle(globalIndex, checked as boolean)
                              }
                            />
                            <span className={`text-sm ${item.purchased ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                              {item.name}
                            </span>
                          </div>
                          <span className="text-sm text-secondary">{item.quantity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {shoppingList && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-secondary">
                Total items: <span className="font-medium text-gray-900">{totalItems}</span> | 
                Estimated cost: <span className="font-medium text-gray-900">${estimatedCost}</span>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button size="sm" className="btn-primary">
                  Save List
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
