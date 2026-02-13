"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
  type Weapon, 
  categoryIcons, 
  rarityColors, 
  formatDamage 
} from "@/lib/weapon-data";

interface WeaponCardProps {
  weapon: Weapon;
  isSelected: boolean;
  onClick: () => void;
}

export function WeaponCard({ weapon, isSelected, onClick }: WeaponCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex flex-col p-2 border transition-colors duration-75 text-left group relative pointer-events-auto panel-corners-inner",
        isSelected 
          ? "bg-orange-glow border-orange-glow text-primary-foreground shadow-lg shadow-orange-glow/30" 
          : "bg-transparent border-border/50 hover:border-orange-dim/50"
      )}
      style={{
        boxShadow: isSelected 
          ? '0 8px 25px -5px rgba(255, 150, 50, 0.3), 0 0 15px -3px rgba(255, 150, 50, 0.2)' 
          : undefined,
      }}
    >
      {/* Top: Image + Score */}
      <div className="flex items-center gap-2 mb-1.5">
        <div className={cn(
          "w-16 h-10 relative flex-shrink-0 overflow-hidden",
          isSelected ? "bg-orange-bright/20" : "bg-transparent border border-border/30"
        )}>
          <Image
            src={weapon.image || "/placeholder.svg"}
            alt={weapon.name}
            fill
            className="object-contain p-0.5"
          />
        </div>
        <div className={cn(
          "ml-auto text-right flex-shrink-0",
          isSelected ? "text-primary-foreground" : "text-foreground"
        )}>
          <span className="text-[9px] opacity-60 block leading-none">SCORE</span>
          <span className="text-lg font-bold leading-tight">{weapon.score}</span>
        </div>
      </div>

      {/* Name Row */}
      <div className="flex items-center gap-1.5 mb-1">
        <span className={cn(
          "text-[11px]",
          isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {categoryIcons[weapon.category]}
        </span>
        <span className={cn(
          "text-xs font-medium truncate",
          isSelected ? "text-primary-foreground" : rarityColors[weapon.rarity]
        )}>
          {weapon.name}
        </span>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-3 text-[10px]">
        <div>
          <span className={cn(
            "opacity-60",
            isSelected ? "text-primary-foreground" : "text-muted-foreground"
          )}>DMG </span>
          <span className={cn(
            "font-mono font-semibold",
            isSelected ? "text-primary-foreground" : "text-foreground"
          )}>
            {formatDamage(weapon.damage)}
          </span>
        </div>
        <div>
          <span className={cn(
            "opacity-60",
            isSelected ? "text-primary-foreground" : "text-muted-foreground"
          )}>RPM </span>
          <span className={cn(
            "font-mono",
            isSelected ? "text-primary-foreground" : "text-foreground"
          )}>
            {weapon.rpm}
          </span>
        </div>
        <div>
          <span className={cn(
            "opacity-60",
            isSelected ? "text-primary-foreground" : "text-muted-foreground"
          )}>MAG </span>
          <span className={cn(
            "font-mono",
            isSelected ? "text-primary-foreground" : "text-foreground"
          )}>
            {weapon.magazine}
          </span>
        </div>
      </div>
    </button>
  );
}
