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
  const sel = isSelected;

  return (
    <div
                              className="panel-corners-inner"
                            >
    <button
      onClick={onClick}
      className={cn(
        "relative w-full h-[88px] overflow-hidden border text-left pointer-events-auto ",
        "border-white/20 border-solid/60 hover:border-solid/80"
      )}
    >
      {/* Left core attribute color bar */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[6px] z-10",
          coreBarColors[brandSet.coreAttribute]
        )}
      />

      {/* Background: orange-glow when selected (delayed), core gradient otherwise */}
      <div
        className="absolute inset-0"
        style={{
          background: sel
            ? "var(--orange-glow)"
            : coreGradients[brandSet.coreAttribute],
          transition: "none",
        }}
      />

      {/* Center icon placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CoreIcon
          attribute={brandSet.coreAttribute}
          className={cn("w-10 h-10", sel ? "opacity-10" : "opacity-15")}
        />
      </div>

      {/* Brand name - top left */}
      <div
        className="absolute top-1.5 left-2.5 z-10 max-w-[60%] truncate"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <span className={cn("text-[11px] font-medium", sel ? "text-black" : "text-white/80")}>
          {brandSet.brand}
        </span>
      </div>

      {/* Bonuses - bottom left */}
      <div
        className="absolute bottom-1.5 left-2.5 flex flex-col gap-px z-10"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] font-bold leading-none", sel ? "text-black/70" : "text-orange-glow")}>
            1
          </span>
          <span className={cn("text-[10px] font-mono leading-tight truncate max-w-[130px]", sel ? "text-black" : "text-white/90")}>
            {brandSet.bonus1Piece}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] font-bold leading-none", sel ? "text-black/70" : "text-orange-dim")}>
            2
          </span>
          <span className={cn("text-[10px] font-mono leading-tight truncate max-w-[130px]", sel ? "text-black" : "text-white/70")}>
            {brandSet.bonus2Piece}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={cn("text-[7px] font-bold leading-none", sel ? "text-black/70" : "text-orange-dim/70")}>
            3
          </span>
          <span className={cn("text-[10px] font-mono leading-tight truncate max-w-[130px]", sel ? "text-black" : "text-white/60")}>
            {brandSet.bonus3Piece}
          </span>
        </div>
      </div>

      {/* Core attribute - top right */}
      <div
        className="absolute top-1.5 right-2 flex items-center gap-1 z-10"
        style={{ textShadow: sel ? "none" : "0 1px 4px rgba(0,0,0,0.9)" }}
      >
        <CoreIcon
          attribute={brandSet.coreAttribute}
          className={cn("w-3 h-3", sel && "text-black/70")}
        />
        <span className={cn("text-[10px] font-bold", sel ? "text-black" : "text-white/80")}>
          {brandSet.coreAttribute}
        </span>
      </div>
    </button>
    </div>
  );
}
