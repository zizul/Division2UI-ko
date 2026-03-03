"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import {
  type Weapon,
  type WeaponRarity,
  categoryIcons,
  formatDamage,
} from "@/lib/weapon-data";

interface WeaponCardProps {
  weapon: Weapon;
  isSelected: boolean;
  onClick: () => void;
}

const rarityBarColors: Record<WeaponRarity, string> = {
  Standard: "bg-blue-stat",
  Superior: "bg-superior",
  "High-End": "bg-orange-glow",
  "Gear Set": "bg-gear-set",
};

const rarityGradients: Record<WeaponRarity, string> = {
  Standard:
    "linear-gradient(to right, rgba(80,100,180,0.25) 0%, rgba(22,22,28,0.75) 100%)",
  Superior:
    "linear-gradient(to right, rgba(140,70,170,0.25) 0%, rgba(22,22,28,0.75) 100%)",
  "High-End":
    "linear-gradient(to right, rgba(180,120,40,0.25) 0%, rgba(22,22,28,0.75) 100%)",
  "Gear Set":
    "linear-gradient(to right, rgba(60,150,80,0.25) 0%, rgba(22,22,28,0.75) 100%)",
};

export function WeaponCard({ weapon, isSelected, onClick }: WeaponCardProps) {
  const sel = isSelected;

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full h-[88px] overflow-hidden border text-left pointer-events-auto",
        "border-white/50 border-solid/60 hover:border-solid/80"
      )}
      style={{
        zIndex: "2",
      }}
    >
      {/* Left rarity color bar */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[6px] z-10",
          rarityBarColors[weapon.rarity]
        )}
      />

      {/* Background: orange-glow when selected (delayed), rarity gradient otherwise */}
      <div
        className="absolute inset-0"
        style={{
          background: sel
            ? "var(--orange-glow)"
            : rarityGradients[weapon.rarity],
          transition: "none",
        }}
      />

      {/* Weapon image - centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={weapon.image || "/placeholder.svg"}
            alt={weapon.name}
            fill
            className="object-contain p-2 px-8"
          />
        </div>
      </div>

      {/* Stats - upper left */}
      <div
        className="absolute top-1.5 left-2.5 flex flex-col gap-px z-10"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] leading-none", sel ? "text-black/70" : "text-red-stat")}>♦</span>
          <span className={cn("text-[10px] font-mono font-semibold leading-tight", sel ? "text-black" : "text-white/90")}>
            {formatDamage(weapon.damage)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] leading-none", sel ? "text-black/70" : "text-green-stat")}>▲</span>
          <span className={cn("text-[10px] font-mono leading-tight", sel ? "text-black" : "text-white/70")}>
            {weapon.rpm}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] leading-none", sel ? "text-black/70" : "text-blue-stat")}>▲</span>
          <span className={cn("text-[10px] font-mono leading-tight", sel ? "text-black" : "text-white/70")}>
            {weapon.magazine}
          </span>
        </div>
      </div>

      {/* Score - top right */}
      <div
        className="absolute top-1.5 right-2 flex items-center gap-1 z-10"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <Star className={cn("w-3 h-3", sel ? "text-black/70" : "text-orange-glow")} fill="currentColor" />
        <span className={cn("text-[11px] font-bold", sel ? "text-black" : "text-white/80")}>
          {weapon.score}
        </span>
      </div>

      {/* Category icon - bottom right */}
      <div
        className="absolute bottom-1.5 right-2 z-10"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <span className={cn("text-base", sel ? "text-black/30" : "text-white/30")}>
          {categoryIcons[weapon.category]}
        </span>
      </div>
    </button>
  );
}
