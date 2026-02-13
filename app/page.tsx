"use client";

import Link from "next/link";
import { Crosshair, Shield, Swords, Zap } from "lucide-react";

const BG_IMAGE_URL = "/bg-capitol.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden relative">
      {/* Background Image - Division 2 Capitol */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      {/* Background Grid Effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

      {/* Ambient Light Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255, 150, 50, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(100, 150, 255, 0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-glow mb-2">Division 2</h1>
          <p className="text-muted-foreground">Inventory Management System</p>
        </div>

        {/* Navigation Cards */}
        <div className="flex gap-8">
          {/* Weapons Card */}
          <Link
            href="/weapons"
            className="group relative w-72 h-80 bg-card/80 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:border-orange-glow/50 hover:bg-card panel-corners"
          >
            <div className="panel-corners-inner h-full flex flex-col">
              {/* Icon */}
              <div className="w-20 h-20 bg-secondary/50 border border-border/50 flex items-center justify-center mb-6 group-hover:border-orange-glow/30 transition-colors">
                <Crosshair className="w-10 h-10 text-orange-glow" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-foreground mb-2">Weapons</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Browse and manage your weapon inventory. View stats, equip gear, and optimize your loadout.
              </p>

              {/* Stats Preview */}
              <div className="mt-auto flex gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground block">Items</span>
                  <span className="text-foreground font-mono">9</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Categories</span>
                  <span className="text-foreground font-mono">7</span>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 text-orange-glow opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs">Enter →</span>
              </div>
            </div>
          </Link>

          {/* Brand Sets Card */}
          <Link
            href="/brandsets"
            className="group relative w-72 h-80 bg-card/80 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:border-orange-glow/50 hover:bg-card panel-corners"
          >
            <div className="panel-corners-inner h-full flex flex-col">
              {/* Icon */}
              <div className="w-20 h-20 bg-secondary/50 border border-border/50 flex items-center justify-center mb-6 group-hover:border-orange-glow/30 transition-colors">
                <div className="flex gap-1">
                  <Shield className="w-5 h-5 text-blue-stat" />
                  <Swords className="w-5 h-5 text-red-stat" />
                  <Zap className="w-5 h-5 text-gear-set" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-foreground mb-2">Brand Sets</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Explore brand set bonuses and named gear. Find the perfect combination for your build.
              </p>

              {/* Stats Preview */}
              <div className="mt-auto flex gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground block">Brands</span>
                  <span className="text-foreground font-mono">35</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Core Types</span>
                  <span className="text-foreground font-mono">3</span>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 text-orange-glow opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs">Enter →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
