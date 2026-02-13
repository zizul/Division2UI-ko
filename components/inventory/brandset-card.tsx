"use client";

import { cn } from "@/lib/utils";
import { Shield, Swords, Zap } from "lucide-react";
import {
  type BrandSet,
  coreAttributeColors,
} from "@/lib/brandset-data";

interface BrandSetCardProps {
  brandSet: BrandSet;
  isSelected: boolean;
  onClick: () => void;
}

function CoreAttributeIcon({ attribute, className }: { attribute: BrandSet["coreAttribute"]; className?: string }) {
  switch (attribute) {
    case "Armor":
      return <Shield className={cn("text-blue-stat", className)} />;
    case "Damage":
      return <Swords className={cn("text-red-stat", className)} />;
    case "Skill":
      return <Zap className={cn("text-gear-set", className)} />;
  }
}

export function BrandSetCard({ brandSet, isSelected, onClick }: BrandSetCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex flex-col p-2 border transition-colors duration-75 text-left group relative pointer-events-auto panel-corners-inner",
        isSelected
          ? "bg-orange-glow border-orange-glow text-primary-foreground shadow-lg shadow-orange-glow/30"
          : "bg-transparent border-border/100 hover:border-orange-dim/50"
      )}
      style={{
        boxShadow: isSelected
          ? "0 8px 25px -5px rgba(255, 150, 50, 0.3), 0 0 15px -3px rgba(255, 150, 50, 0.2)"
          : undefined,
      }}
    >
      {/* Top: Icon + Core Attribute */}
      <div className="flex items-center gap-2 mb-1.5">
        <div
          className={cn(
            "w-8 h-8 flex-shrink-0 flex items-center justify-center",
            isSelected ? "bg-orange-bright/20" : "bg-transparent border border-border/30"
          )}
        >
          <CoreAttributeIcon
            attribute={brandSet.coreAttribute}
            className={cn("w-4 h-4", isSelected && "text-primary-foreground")}
          />
        </div>
        <span
          className={cn(
            "text-[10px] font-bold ml-auto",
            isSelected ? "text-primary-foreground" : coreAttributeColors[brandSet.coreAttribute]
          )}
        >
          {brandSet.coreAttribute}
        </span>
      </div>

      {/* Brand Name */}
      <span
        className={cn(
          "text-xs font-medium truncate block mb-1",
          isSelected ? "text-primary-foreground" : coreAttributeColors[brandSet.coreAttribute]
        )}
      >
        {brandSet.brand}
      </span>

      {/* 1pc Bonus */}
      <div className="text-[10px] truncate">
        <span
          className={cn(
            "opacity-60",
            isSelected ? "text-primary-foreground" : "text-muted-foreground"
          )}
        >
          1pc{" "}
        </span>
        <span
          className={cn(
            "font-mono",
            isSelected ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {brandSet.bonus1Piece}
        </span>
      </div>
    </button>
  );
}
