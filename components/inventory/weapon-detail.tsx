"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
  type Weapon, 
  categoryIcons, 
  rarityColors, 
  rarityBgColors,
  formatDamage 
} from "@/lib/weapon-data";

interface WeaponDetailProps {
  weapon: Weapon;
}

export function WeaponDetail({ weapon }: WeaponDetailProps) {
  return (
    <div className="w-80 flex-shrink-0 relative z-10 h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className={cn("text-lg font-bold", rarityColors[weapon.rarity])}>
            {weapon.name}
          </h2>
          <span className={cn(
            "text-xs px-2 py-0.5 border",
            rarityBgColors[weapon.rarity],
            rarityColors[weapon.rarity]
          )}>
            {weapon.rarity}
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-muted-foreground block">SCORE</span>
          <span className="text-3xl font-bold text-foreground">{weapon.score}</span>
        </div>
      </div>

      {/* Category */}
      <div className="flex items-center gap-2 mb-6 text-muted-foreground">
        <span className="text-lg">{categoryIcons[weapon.category]}</span>
        <span className="text-sm">{weapon.category}</span>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <span className="text-xs text-muted-foreground block">DMG</span>
          <span className="text-2xl font-bold text-foreground font-mono">
            {formatDamage(weapon.damage)}
          </span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block">RPM</span>
          <span className="text-2xl font-bold text-foreground font-mono">
            {weapon.rpm}
          </span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground block">MAG</span>
          <span className="text-2xl font-bold text-foreground font-mono">
            {weapon.magazine}
          </span>
        </div>
      </div>

      {/* Accuracy Bar */}
      <div className="mb-4">
        <span className="text-xs text-muted-foreground block mb-2">Accuracy</span>
        <div className="h-2 bg-secondary rounded-sm overflow-hidden">
          <div 
            className="h-full bg-foreground/80 transition-all duration-300"
            style={{ width: `${weapon.accuracy}%` }}
          />
        </div>
      </div>

      {/* Reload Time */}
      <div className="mb-6">
        <span className="text-sm text-muted-foreground">
          Reload Time: <span className="text-foreground font-medium">{weapon.reloadTime}s</span>
        </span>
      </div>

      {/* Weapon Image */}
      <div className="relative h-32 bg-secondary/30 border border-border/50 mb-6">
        <Image
          src={weapon.image || "/placeholder.svg"}
          alt={weapon.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Talents */}
      {weapon.talents && weapon.talents.length > 0 && (
        <div className="mb-4">
          <span className="text-xs text-muted-foreground block mb-2">Talents</span>
          <div className="flex flex-wrap gap-2">
            {weapon.talents.map((talent) => (
              <span 
                key={talent}
                className="text-xs px-2 py-1 bg-orange-glow/20 border border-orange-glow/50 text-orange-glow"
              >
                {talent}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mod Slots */}
      <div>
        <span className="text-xs text-muted-foreground block mb-2">Mod Slots</span>
        <div className="grid grid-cols-2 gap-2">
          {["Optic", "Magazine", "Underbarrel", "Muzzle"].map((slot) => (
            <div 
              key={slot}
              className="h-8 bg-secondary/50 border border-border/50 flex items-center justify-center text-xs text-muted-foreground"
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
