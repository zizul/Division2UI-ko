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

const rarityGradientSelected: Record<WeaponRarity, string> = {
  Standard:
    "linear-gradient(to right, rgba(80,100,180,0.45) 0%, rgba(25,22,18,0.85) 100%)",
  Superior:
    "linear-gradient(to right, rgba(140,70,170,0.45) 0%, rgba(25,22,18,0.85) 100%)",
  "High-End":
    "linear-gradient(to right, rgba(180,120,40,0.45) 0%, rgba(25,22,18,0.85) 100%)",
  "Gear Set":
    "linear-gradient(to right, rgba(60,150,80,0.45) 0%, rgba(25,22,18,0.85) 100%)",
};

export function WeaponCard({ weapon, isSelected, onClick }: WeaponCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full h-[88px] overflow-hidden border transition-all duration-150 text-left pointer-events-auto",
        isSelected
          ? "border-orange-glow"
          : "border-border/60 hover:border-border/80"
      )}
      style={{
        boxShadow: isSelected
          ? "0 0 20px rgba(255, 150, 50, 0.4), inset 0 0 15px rgba(255, 150, 50, 0.1)"
          : undefined,
      }}
    >
      {/* Left rarity color bar */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[3px] z-10",
          rarityBarColors[weapon.rarity]
        )}
      />

      {/* Background gradient - tinted by rarity */}
      <div
        className="absolute inset-0"
        style={{
          background: isSelected
            ? rarityGradientSelected[weapon.rarity]
            : rarityGradients[weapon.rarity],
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
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <div className="flex items-center gap-1">
          <span className="text-red-stat text-[7px] leading-none">♦</span>
          <span className="text-white/90 text-[10px] font-mono font-semibold leading-tight">
            {formatDamage(weapon.damage)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-stat text-[7px] leading-none">▲</span>
          <span className="text-white/70 text-[10px] font-mono leading-tight">
            {weapon.rpm}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-blue-stat text-[7px] leading-none">▲</span>
          <span className="text-white/70 text-[10px] font-mono leading-tight">
            {weapon.magazine}
          </span>
        </div>
      </div>

      {/* Score - top right */}
      <div
        className="absolute top-1.5 right-2 flex items-center gap-1 z-10"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <Star className="w-3 h-3 text-orange-glow" fill="currentColor" />
        <span className="text-white/80 text-[11px] font-bold">
          {weapon.score}
        </span>
      </div>

      {/* Category icon - bottom right */}
      <div
        className="absolute bottom-1.5 right-2 z-10"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <span className="text-white/30 text-base">
          {categoryIcons[weapon.category]}
        </span>
      </div>
    </button>
  );
}
