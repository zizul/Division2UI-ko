"use client";

import { cn } from "@/lib/utils";
import type { WeaponCategory, SortOption } from "@/lib/weapon-data";
import { ChevronDown } from "lucide-react";

interface InventoryHeaderProps {
  inventoryCount: number;
  maxInventory: number;
  selectedCategory: WeaponCategory | "All";
  onCategoryChange: (category: WeaponCategory | "All") => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  slotLabel: string;
}

const categories: (WeaponCategory | "All")[] = [
  "All",
  "Assault Rifle",
  "SMG",
  "Rifle",
  "LMG",
  "Shotgun",
  "Pistol",
  "Marksman Rifle",
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "score", label: "Score" },
  { value: "damage", label: "Damage" },
  { value: "rpm", label: "RPM" },
  { value: "name", label: "Name" },
];

export function InventoryHeader({
  inventoryCount,
  maxInventory,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  slotLabel,
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
            onChange={(e) => onCategoryChange(e.target.value as WeaponCategory | "All")}
            className="appearance-none bg-secondary border border-border/50 text-foreground text-sm px-3 py-1.5 pr-8 focus:outline-none focus:border-orange-glow/50"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2">Sort:</span>
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={cn(
                "px-3 py-1 text-xs transition-all duration-200",
                sortBy === option.value
                  ? "bg-orange-glow text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
