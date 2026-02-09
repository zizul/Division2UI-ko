"use client";

import { Shield, Heart, Award } from "lucide-react";

interface PlayerStats {
  username: string;
  title: string;
  score: number;
  armor: number;
  health: number;
  credits: number;
}

interface PlayerSidebarProps {
  stats: PlayerStats;
}

export function PlayerSidebar({ stats }: PlayerSidebarProps) {
  return (
    <div className="w-48 flex-shrink-0 flex flex-col gap-6">
      {/* Player Info */}
      <div className="space-y-1">
        <h2 className="text-foreground font-medium text-sm">{stats.username}</h2>
        <p className="text-muted-foreground text-xs">{stats.title}</p>
      </div>

      {/* Score Circle */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-orange-glow/30 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-glow border-b-orange-glow animate-spin" style={{ animationDuration: '20s' }} />
          <div className="text-center">
            <span className="text-xs text-muted-foreground block">SCORE</span>
            <span className="text-2xl font-bold text-foreground">{stats.score}</span>
          </div>
        </div>
      </div>

      {/* Emblem */}
      <div className="w-16 h-16 border border-border/50 flex items-center justify-center">
        <Award className="w-10 h-10 text-orange-dim" />
      </div>

      {/* Armor Stat */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-stat" />
          <span className="text-xs text-muted-foreground">Armor</span>
        </div>
        <span className="text-lg font-bold text-foreground">{stats.armor.toLocaleString()}</span>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-blue-stat w-3/4" />
        </div>
      </div>

      {/* Health Stat */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-stat" />
          <span className="text-xs text-muted-foreground">Health</span>
        </div>
        <span className="text-lg font-bold text-foreground">{stats.health.toLocaleString()}</span>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-red-stat w-1/2" />
        </div>
      </div>

      {/* Credits */}
      <div className="flex items-center gap-2 mt-auto">
        <div className="w-4 h-4 rounded-full bg-orange-glow flex items-center justify-center">
          <span className="text-[8px] text-primary-foreground font-bold">$</span>
        </div>
        <span className="text-sm text-foreground">{stats.credits.toLocaleString()}</span>
      </div>
    </div>
  );
}
