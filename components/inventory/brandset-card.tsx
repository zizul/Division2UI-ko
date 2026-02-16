"use client";

import { cn } from "@/lib/utils";
import { Shield, Swords, Zap } from "lucide-react";
import { type BrandSet, type CoreAttribute } from "@/lib/brandset-data";

interface BrandSetCardProps {
  brandSet: BrandSet;
  isSelected: boolean;
  onClick: () => void;
}

const coreBarColors: Record<CoreAttribute, string> = {
  Armor: "bg-blue-stat",
  Damage: "bg-red-stat",
  Skill: "bg-gear-set",
};

const coreGradients: Record<CoreAttribute, string> = {
  Armor:
    "linear-gradient(to right, rgba(60,90,180,0.25) 0%, rgba(22,22,28,0.75) 100%)",
  Damage:
    "linear-gradient(to right, rgba(180,60,50,0.25) 0%, rgba(22,22,28,0.75) 100%)",
  Skill:
    "linear-gradient(to right, rgba(60,150,80,0.25) 0%, rgba(22,22,28,0.75) 100%)",
};

const coreGradientSelected: Record<CoreAttribute, string> = {
  Armor:
    "linear-gradient(to right, rgba(60,90,180,0.45) 0%, rgba(25,22,18,0.85) 100%)",
  Damage:
    "linear-gradient(to right, rgba(180,60,50,0.45) 0%, rgba(25,22,18,0.85) 100%)",
  Skill:
    "linear-gradient(to right, rgba(60,150,80,0.45) 0%, rgba(25,22,18,0.85) 100%)",
};

function CoreIcon({
  attribute,
  className,
}: {
  attribute: CoreAttribute;
  className?: string;
}) {
  switch (attribute) {
    case "Armor":
      return <Shield className={cn("text-blue-stat", className)} />;
    case "Damage":
      return <Swords className={cn("text-red-stat", className)} />;
    case "Skill":
      return <Zap className={cn("text-gear-set", className)} />;
  }
}

export function BrandSetCard({
  brandSet,
  isSelected,
  onClick,
}: BrandSetCardProps) {
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
      {/* Left core attribute color bar */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[3px] z-10",
          coreBarColors[brandSet.coreAttribute]
        )}
      />

      {/* Background gradient - tinted by core attribute */}
      <div
        className="absolute inset-0"
        style={{
          background: isSelected
            ? coreGradientSelected[brandSet.coreAttribute]
            : coreGradients[brandSet.coreAttribute],
        }}
      />

      {/* Center icon placeholder (like weapon image) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CoreIcon
          attribute={brandSet.coreAttribute}
          className="w-10 h-10 opacity-15"
        />
      </div>

      {/* Brand name - top left */}
      <div
        className="absolute top-1.5 left-2.5 z-10 max-w-[60%] truncate"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <span className="text-white/80 text-[11px] font-medium">
          {brandSet.brand}
        </span>
      </div>

      {/* Bonuses - bottom left (like weapon stats) */}
      <div
        className="absolute bottom-1.5 left-2.5 flex flex-col gap-px z-10"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <div className="flex items-center gap-1">
          <span className="text-orange-glow text-[7px] font-bold leading-none">
            1
          </span>
          <span className="text-white/90 text-[10px] font-mono leading-tight truncate max-w-[130px]">
            {brandSet.bonus1Piece}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-orange-dim text-[7px] font-bold leading-none">
            2
          </span>
          <span className="text-white/70 text-[10px] font-mono leading-tight truncate max-w-[130px]">
            {brandSet.bonus2Piece}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-orange-dim/70 text-[7px] font-bold leading-none">
            3
          </span>
          <span className="text-white/60 text-[10px] font-mono leading-tight truncate max-w-[130px]">
            {brandSet.bonus3Piece}
          </span>
        </div>
      </div>

      {/* Core attribute - top right */}
      <div
        className="absolute top-1.5 right-2 flex items-center gap-1 z-10"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <CoreIcon attribute={brandSet.coreAttribute} className="w-3 h-3" />
        <span className="text-white/80 text-[10px] font-bold">
          {brandSet.coreAttribute}
        </span>
      </div>
    </button>
  );
}
