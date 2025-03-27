
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface FilterOption {
  id: string;
  name: string;
}

interface ProductFiltersProps {
  onFilterChange: (filters: string[]) => void;
  onSortChange: (sortOption: string) => void;
}

const ProductFilters = ({ onFilterChange, onSortChange }: ProductFiltersProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState<string>("featured");

  const filterCategories = [
    {
      name: "Certifications",
      options: [
        { id: "organic", name: "Organic Certified" },
        { id: "kosher", name: "Kosher" },
        { id: "halal", name: "Halal" },
        { id: "non-gmo", name: "Non-GMO" },
      ],
    },
    {
      name: "Application",
      options: [
        { id: "nutraceutical", name: "Nutraceutical" },
        { id: "pharmaceutical", name: "Pharmaceutical" },
        { id: "cosmetic", name: "Cosmetic" },
        { id: "food-beverage", name: "Food & Beverage" },
      ],
    },
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "newest", name: "Newest" },
    { id: "alphabetical", name: "A-Z" },
    { id: "alphabetical-reverse", name: "Z-A" },
  ];

  const handleFilterToggle = (filterId: string) => {
    setActiveFilters(prev => {
      const newFilters = prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId];
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleSortChange = (sortId: string) => {
    setActiveSort(sortId);
    onSortChange(sortId);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    onFilterChange([]);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex flex-wrap items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter Products</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {filterCategories.map((category) => (
              <DropdownMenuGroup key={category.name}>
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                  {category.name}
                </DropdownMenuLabel>
                {category.options.map((option) => (
                  <DropdownMenuItem
                    key={option.id}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleFilterToggle(option.id)}
                  >
                    <div className="w-4 h-4 border rounded flex items-center justify-center">
                      {activeFilters.includes(option.id) && <Check className="h-3 w-3" />}
                    </div>
                    {option.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </DropdownMenuGroup>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="w-full justify-center mt-2"
              disabled={activeFilters.length === 0}
            >
              Clear All Filters
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {activeFilters.map((filterId) => {
              const filterName = filterCategories
                .flatMap((category) => category.options)
                .find((option) => option.id === filterId)?.name;

              return (
                <Badge key={filterId} variant="outline" className="flex items-center gap-1">
                  {filterName}
                  <button
                    className="ml-1 rounded-full"
                    onClick={() => handleFilterToggle(filterId)}
                  >
                    ×
                  </button>
                </Badge>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-muted-foreground"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            Sort by: {sortOptions.find(o => o.id === activeSort)?.name}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.id}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleSortChange(option.id)}
            >
              <div className="w-4 flex items-center justify-center">
                {activeSort === option.id && <Check className="h-3 w-3" />}
              </div>
              {option.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProductFilters;
