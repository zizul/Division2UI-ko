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

function StatChange({ value }: { value?: number }) {
  if (!value) return null;
  const isPositive = value > 0;
  return (
    <span className={cn(
      "text-[10px] ml-0.5",
      isPositive ? "text-green-stat" : "text-red-stat"
    )}>
      {isPositive ? "↑" : "↓"}
    </span>
  );
}

export function WeaponCard({ weapon, isSelected, onClick }: WeaponCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 p-2 border transition-all duration-75 text-left group relative panel-corners panel-corners-inner",
        isSelected 
          ? "bg-orange-glow border-orange-glow text-primary-foreground shadow-lg shadow-orange-glow/30" 
          : "bg-card/80 border-border/50 hover:border-orange-dim/50 hover:bg-card"
      )}
      style={{
        boxShadow: isSelected 
          ? '0 8px 25px -5px rgba(255, 150, 50, 0.3), 0 0 15px -3px rgba(255, 150, 50, 0.2)' 
          : undefined,
      }}
    >
      {/* Weapon Image */}
      <div className={cn(
        "w-24 h-14 relative flex-shrink-0 overflow-hidden",
        isSelected ? "bg-orange-bright/20" : "bg-secondary/50"
      )}>
        <Image
          src={weapon.image || "/placeholder.svg"}
          alt={weapon.name}
          fill
          className="object-contain p-1"
        />
      </div>

      {/* Weapon Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={cn(
            "text-xs",
            isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            {categoryIcons[weapon.category]}
          </span>
          <span className={cn(
            "text-sm font-medium truncate",
            isSelected ? "text-primary-foreground" : rarityColors[weapon.rarity]
          )}>
            {weapon.name}
          </span>
        </div>
        
        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs">
          <div>
            <span className={cn(
              "opacity-60",
              isSelected ? "text-primary-foreground" : "text-muted-foreground"
            )}>DMG</span>
            <div className="flex items-center">
              <span className={cn(
                "font-mono font-semibold",
                isSelected 
                  ? "text-primary-foreground" 
                  : weapon.damageChange && weapon.damageChange > 0 
                    ? "text-green-stat" 
                    : weapon.damageChange && weapon.damageChange < 0 
                      ? "text-red-stat" 
                      : "text-foreground"
              )}>
                {formatDamage(weapon.damage)}
              </span>
              {!isSelected && <StatChange value={weapon.damageChange} />}
            </div>
          </div>
          
          <div>
            <span className={cn(
              "opacity-60",
              isSelected ? "text-primary-foreground" : "text-muted-foreground"
            )}>RPM</span>
            <div className="flex items-center">
              <span className={cn(
                "font-mono",
                isSelected ? "text-primary-foreground" : "text-foreground"
              )}>
                {weapon.rpm}
              </span>
              {!isSelected && <StatChange value={weapon.rpmChange} />}
            </div>
          </div>
          
          <div>
            <span className={cn(
              "opacity-60",
              isSelected ? "text-primary-foreground" : "text-muted-foreground"
            )}>MAG</span>
            <div className="flex items-center">
              <span className={cn(
                "font-mono",
                isSelected ? "text-primary-foreground" : "text-foreground"
              )}>
                {weapon.magazine}
              </span>
              {!isSelected && <StatChange value={weapon.magChange} />}
            </div>
          </div>
        </div>
      </div>

      {/* Score */}
      <div className={cn(
        "text-right flex-shrink-0 pr-2",
        isSelected ? "text-primary-foreground" : "text-foreground"
      )}>
        <span className="text-[10px] opacity-60 block">SCORE</span>
        <span className="text-xl font-bold">{weapon.score}</span>
      </div>
    </button>
  );
}
