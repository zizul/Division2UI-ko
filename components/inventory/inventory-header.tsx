"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface InventoryHeaderProps {
  inventoryCount: number;
  maxInventory: number;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  slotLabel: string;
  categories: { value: string; label: string }[];
  sortOptions: { value: string; label: string }[];
}

export function InventoryHeader({
  inventoryCount,
  maxInventory,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  slotLabel,
  categories,
  sortOptions,
}: InventoryHeaderProps) {
  return (
    <div className="mb-4">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-medium text-foreground">{slotLabel}</h1>
          <span className="text-muted-foreground">|</span>
          <span className="text-muted-foreground text-sm">
            Inventory: <span className="text-foreground">{inventoryCount}</span>/{maxInventory}
          </span>
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex items-center gap-4">
        {/* Category Filter */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="appearance-none bg-secondary border border-border/50 text-foreground text-sm px-3 py-1.5 pr-8 focus:outline-none focus:border-orange-glow/50"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2">Sort:</span>
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSortChange(opt.value)}
              className={cn(
                "px-3 py-1 text-xs transition-all duration-200",
                sortBy === opt.value
                  ? "bg-orange-glow text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
