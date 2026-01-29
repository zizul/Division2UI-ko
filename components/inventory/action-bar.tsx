"use client";

import { cn } from "@/lib/utils";

interface ActionBarProps {
  onEquip: () => void;
  onDeconstruct: () => void;
  onBack: () => void;
  isEquipped: boolean;
}

export function ActionBar({ onEquip, onDeconstruct, onBack, isEquipped }: ActionBarProps) {
  return (
    <div className="flex items-center justify-center gap-8 py-4">
      {/* Equip Button */}
      <button
        onClick={onEquip}
        className={cn(
          "flex items-center gap-3 px-6 py-2 transition-all duration-200",
          isEquipped
            ? "bg-secondary text-muted-foreground cursor-not-allowed"
            : "bg-orange-glow hover:bg-orange-bright text-primary-foreground"
        )}
        disabled={isEquipped}
      >
        <span className="w-6 h-6 bg-primary-foreground/20 flex items-center justify-center text-xs">
          E
        </span>
        <span className="font-medium">{isEquipped ? "Equipped" : "Equip"}</span>
      </button>

      {/* Deconstruct Button */}
      <button
        onClick={onDeconstruct}
        className="flex items-center gap-3 px-6 py-2 bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200"
      >
        <span className="text-xs text-orange-glow border border-orange-glow/50 px-1.5 py-0.5">
          Tab
        </span>
        <span>Deconstruct</span>
      </button>

      {/* Mark as Junk */}
      <button
        onClick={() => {}}
        className="flex items-center gap-3 px-6 py-2 bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200"
      >
        <span className="text-xs text-orange-glow border border-orange-glow/50 px-1.5 py-0.5">
          X
        </span>
        <span>Mark as Junk</span>
      </button>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-3 px-6 py-2 text-muted-foreground hover:text-foreground transition-all duration-200 ml-auto"
      >
        <span className="text-xs text-orange-glow border border-orange-glow/50 px-1.5 py-0.5">
          Esc
        </span>
        <span>Back</span>
      </button>
    </div>
  );
}
