"use client";

import { cn } from "@/lib/utils";
import { Shield, Swords, Zap, Award, Shirt, Backpack } from "lucide-react";
import {
  type BrandSet,
  coreAttributeColors,
  coreAttributeBgColors,
} from "@/lib/brandset-data";

interface BrandSetDetailProps {
  brandSet: BrandSet;
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

export function BrandSetDetail({ brandSet }: BrandSetDetailProps) {
  return (
    <div className="w-80 flex-shrink-0 relative z-10 h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className={cn("text-lg font-bold", coreAttributeColors[brandSet.coreAttribute])}>
            {brandSet.brand}
          </h2>
          <span
            className={cn(
              "text-xs px-2 py-0.5 border inline-flex items-center gap-1",
              coreAttributeBgColors[brandSet.coreAttribute],
              coreAttributeColors[brandSet.coreAttribute]
            )}
          >
            <CoreAttributeIcon attribute={brandSet.coreAttribute} className="w-3 h-3" />
            {brandSet.coreAttribute}
          </span>
        </div>
      </div>

      {/* Brand Icon Placeholder */}
      <div className="relative h-24 bg-transparent border border-border/50 mb-6 flex items-center justify-center">
        <CoreAttributeIcon attribute={brandSet.coreAttribute} className="w-16 h-16 opacity-50" />
      </div>

      {/* Set Bonuses */}
      <div className="mb-6">
        <span className="text-xs text-muted-foreground block mb-3">Set Bonuses</span>
        <div className="space-y-3">
          <div className="bg-transparent border border-border/50 p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 bg-orange-glow/20 border border-orange-glow/50 text-orange-glow text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span className="text-xs text-muted-foreground">1 Piece Bonus</span>
            </div>
            <span className="text-sm text-foreground font-medium">{brandSet.bonus1Piece}</span>
          </div>

          <div className="bg-transparent border border-border/50 p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 bg-orange-glow/20 border border-orange-glow/50 text-orange-glow text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span className="text-xs text-muted-foreground">2 Piece Bonus</span>
            </div>
            <span className="text-sm text-foreground font-medium">{brandSet.bonus2Piece}</span>
          </div>

          <div className="bg-transparent border border-border/50 p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 bg-orange-glow/20 border border-orange-glow/50 text-orange-glow text-xs flex items-center justify-center font-bold">
                3
              </span>
              <span className="text-xs text-muted-foreground">3 Piece Bonus</span>
            </div>
            <span className="text-sm text-foreground font-medium">{brandSet.bonus3Piece}</span>
          </div>
        </div>
      </div>

      {/* Named Gear Section */}
      {(brandSet.namedChestpiece || brandSet.namedBackpack || brandSet.otherNamedGear) && (
        <div>
          <span className="text-xs text-muted-foreground block mb-3">Named Gear</span>
          <div className="space-y-2">
            {brandSet.namedChestpiece && (
              <div className="flex items-start gap-2 bg-transparent border border-orange-glow/30 p-2">
                <Shirt className="w-4 h-4 text-orange-glow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-orange-glow block">Chestpiece</span>
                  <span className="text-xs text-foreground">{brandSet.namedChestpiece}</span>
                </div>
              </div>
            )}

            {brandSet.namedBackpack && (
              <div className="flex items-start gap-2 bg-transparent border border-orange-glow/30 p-2">
                <Backpack className="w-4 h-4 text-orange-glow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-orange-glow block">Backpack</span>
                  <span className="text-xs text-foreground">{brandSet.namedBackpack}</span>
                </div>
              </div>
            )}

            {brandSet.otherNamedGear && (
              <div className="flex items-start gap-2 bg-transparent border border-orange-glow/30 p-2">
                <Award className="w-4 h-4 text-orange-glow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-orange-glow block">Other</span>
                  <span className="text-xs text-foreground">{brandSet.otherNamedGear}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
