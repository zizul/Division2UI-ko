"use client";

import { useState, useMemo, useCallback } from "react";
import { PlayerSidebar } from "./player-sidebar";
import { WeaponCard } from "./weapon-card";
import { WeaponDetail } from "./weapon-detail";
import { ActionBar } from "./action-bar";
import { InventoryHeader } from "./inventory-header";
import { weapons, type Weapon, type WeaponCategory, type SortOption } from "@/lib/weapon-data";

const playerStats = {
  username: "ShadowAgent",
  title: "Division Operative",
  score: 263,
  armor: 67468,
  health: 32951,
  credits: 22185,
};

export function WeaponInventory() {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(weapons[3]); // Police Mk17
  const [equippedWeaponId, setEquippedWeaponId] = useState<string>("1"); // Surplus SVD equipped
  const [selectedCategory, setSelectedCategory] = useState<WeaponCategory | "All">("All");
  const [sortBy, setSortBy] = useState<SortOption>("score");

  const filteredAndSortedWeapons = useMemo(() => {
    let result = [...weapons];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((w) => w.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "score":
        result.sort((a, b) => b.score - a.score);
        break;
      case "damage":
        result.sort((a, b) => b.damage - a.damage);
        break;
      case "rpm":
        result.sort((a, b) => b.rpm - a.rpm);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  const handleEquip = useCallback(() => {
    if (selectedWeapon) {
      setEquippedWeaponId(selectedWeapon.id);
    }
  }, [selectedWeapon]);

  const handleDeconstruct = useCallback(() => {
    // In a real app, this would remove the weapon from inventory
    console.log("Deconstructing:", selectedWeapon?.name);
  }, [selectedWeapon]);

  const handleBack = useCallback(() => {
    // In a real app, this would navigate back
    console.log("Going back");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden relative">
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }}
      />
      
      {/* Ambient Light Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 70% 40%, rgba(255, 150, 50, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(100, 150, 255, 0.02) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* 3D Scene Container */}
      <div 
        className="flex-1 flex items-center justify-center p-4"
        style={{ 
          perspective: '1000px',
          perspectiveOrigin: '50% 35%',
        }}
      >
        {/* Main Panel - The base surface rotated in space */}
        <div 
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-25deg)',
          }}
        >
          {/* Main Panel Surface (virtual backing) */}
          <div 
            className="absolute inset-0 -z-10 bg-gradient-to-br from-border/10 to-transparent rounded-sm"
            style={{
              transform: 'translateZ(-20px) scale(1.02)',
              boxShadow: '0 0 100px rgba(0,0,0,0.5)',
            }}
          />
          
          {/* 3D Panel Group on main panel */}
          <div 
            className="flex gap-4 items-stretch"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Player Sidebar */}
            <div 
              className="panel-corners"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0px)',
              }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 p-4 panel-glow h-[600px] panel-corners-inner">
                <PlayerSidebar stats={playerStats} />
              </div>
            </div>

            {/* Weapon List - Center Panel */}
            <div 
              className="flex-1 flex flex-col min-w-[450px] max-w-[550px] panel-corners"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(10px)',
              }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 p-4 panel-glow flex flex-col h-[600px] panel-corners-inner">
                <InventoryHeader
                  inventoryCount={weapons.length}
                  maxInventory={100}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  slotLabel="Primary Weapon"
                />

                {/* Scrollable Weapon List */}
                <div 
                  className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="space-y-1" style={{ transformStyle: 'preserve-3d' }}>
                    {filteredAndSortedWeapons.map((weapon) => (
                      <div
                        key={weapon.id}
                        className="transition-all duration-1000 ease-out"
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: selectedWeapon?.id === weapon.id 
                            ? 'translateZ(50px) scale(1.03)' 
                            : 'translateZ(0px) scale(1)',
                        }}
                      >
                        <WeaponCard
                          weapon={weapon}
                          isSelected={selectedWeapon?.id === weapon.id}
                          onClick={() => setSelectedWeapon(weapon)}
                        />
                      </div>
                    ))}
                  </div>

                  {filteredAndSortedWeapons.length === 0 && (
                    <div className="flex items-center justify-center h-40 text-muted-foreground">
                      No weapons found in this category
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Weapon Detail Panel */}
            {selectedWeapon && (
              <div 
                className="panel-corners"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0px)',
                }}
              >
                <div className="bg-card/95 backdrop-blur-md border border-border/50 p-4 panel-glow h-[600px] overflow-y-auto custom-scrollbar relative panel-corners-inner">
                  <WeaponDetail weapon={selectedWeapon} />
                </div>
              </div>
            )}
          </div>
          {/* Action Bar - Fixed at bottom with 3D effect */}
          <div 
            className="relative z-10"
            style={{
              perspective: '1000px',
              perspectiveOrigin: '50% 100%',
            }}
          >
            <div 
              className="bg-card/90 backdrop-blur-md border-t border-border/30 panel-glow"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-8deg) translateY(-5px) translateZ(30px)',
                transformOrigin: 'center bottom',
              }}
            >
              <ActionBar
                onEquip={handleEquip}
                onDeconstruct={handleDeconstruct}
                onBack={handleBack}
                isEquipped={equippedWeaponId === selectedWeapon?.id}
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
