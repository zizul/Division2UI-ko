"use client";

import { useState, useMemo, useCallback, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { PlayerSidebar, type PlayerStats } from "./player-sidebar";
import { ActionBar } from "./action-bar";
import { InventoryHeader } from "./inventory-header";

export interface ThreePanelInventoryProps<T extends { id: string }> {
  // External state (equipped)
  equippedObjectId: string | null;
  setEquippedObjectId: (id: string | null) => void;

  // Data
  objects: T[];
  playerStats: PlayerStats;

  // Filter & Sort config
  categories: { value: string; label: string }[];
  sortOptions: { value: string; label: string }[];
  filterFn: (object: T, category: string) => boolean;
  sortFn: (a: T, b: T, sortBy: string) => number;

  // Render functions
  renderCard: (object: T, isSelected: boolean, onClick: () => void) => ReactNode;
  renderDetail: (object: T) => ReactNode;

  // Labels & config
  slotLabel: string;
  maxInventory?: number;
  emptyMessage?: string;

  // Optional: initial values for internal state
  defaultSelectedIndex?: number;
  defaultCategory?: string;
  defaultSortBy?: string;
}

export function ThreePanelInventory<T extends { id: string }>({
  equippedObjectId,
  setEquippedObjectId,
  objects,
  playerStats,
  categories,
  sortOptions,
  filterFn,
  sortFn,
  renderCard,
  renderDetail,
  slotLabel,
  maxInventory = 100,
  emptyMessage = "No items found in this category",
  defaultSelectedIndex = 0,
  defaultCategory,
  defaultSortBy,
}: ThreePanelInventoryProps<T>) {
  // Internal state for selection, category, and sort
  const [selectedObject, setSelectedObject] = useState<T | null>(
    objects[defaultSelectedIndex] ?? null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultCategory ?? categories[0]?.value ?? "All"
  );
  const [sortBy, setSortBy] = useState<string>(
    defaultSortBy ?? sortOptions[0]?.value ?? "score"
  );

  const handleEquip = useCallback(() => {
    if (selectedObject) {
      setEquippedObjectId(selectedObject.id);
    }
  }, [selectedObject, setEquippedObjectId]);

  const handleDeconstruct = useCallback(() => {
    console.log("Deconstructing:", selectedObject?.id);
  }, [selectedObject]);

  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push("/");
  }, [router]);

  const filteredAndSortedObjects = useMemo(() => {
    let result = [...objects];

    if (selectedCategory !== "All") {
      result = result.filter((obj) => filterFn(obj, selectedCategory));
    }

    result.sort((a, b) => sortFn(a, b, sortBy));

    return result;
  }, [objects, selectedCategory, sortBy, filterFn, sortFn]);

  const bgImageUrl = "/bg-capitol.jpg";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden relative">
      {/* Background Image - Division 2 Capitol */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
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
            radial-gradient(ellipse 80% 50% at 70% 40%, rgba(255, 150, 50, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(100, 150, 255, 0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* 3D Scene Container */}
      <div
        className="flex-1 flex items-center justify-center p-4"
        style={{
          perspective: "2000px",
          perspectiveOrigin: "30% 50%",
        }}
      >
        {/* Main Panel - The base surface rotated in space */}
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-25deg) scale(1.14)",
          }}
        >
          {/* Main Panel Surface (virtual backing) */}
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-border/10 to-transparent rounded-sm"
            style={{
              transform: "translateZ(-20px) scale(1.02)",
            }}
          />

          {/* 3D Panel Group on main panel */}
          <div
            className="flex flex-col gap-4"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top Row: Three Panels */}
            <div
              className="flex gap-4 items-stretch"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Player Sidebar */}
              <div
                className="panel-corners"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0px)",
                  boxShadow: "0 0 100px rgba(0,0,0,0.5)",
                }}
              >
                <div className="bg-transparent border border-border/100 p-4 h-[600px] panel-corners-inner">
                  <PlayerSidebar stats={playerStats} />
                </div>
              </div>

              {/* Object List - Center Panel */}
              <div
                className="flex-1 flex flex-col min-w-[480px] max-w-[600px] panel-corners"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0px)",
                  boxShadow: "0 0 100px rgba(0,0,0,0.5)",
                }}
              >
                <div className="bg-transparent border border-border/100 p-4 flex flex-col h-[600px] panel-corners-inner">
                  <InventoryHeader
                    inventoryCount={objects.length}
                    maxInventory={maxInventory}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    slotLabel={slotLabel}
                    categories={categories}
                    sortOptions={sortOptions}
                  />

                  {/* Scrollable Object List */}
                  <div
                    className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="grid grid-cols-2 gap-2"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {filteredAndSortedObjects.map((obj) => (
                        <div
                          key={obj.id}
                          className="transition-transform duration-500 ease-in-out pointer-events-none panel-corners"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              selectedObject?.id === obj.id
                                ? "translateZ(100px)"
                                : "translateZ(0px)",
                          }}
                        >
                          {renderCard(
                            obj,
                            selectedObject?.id === obj.id,
                            () => setSelectedObject(obj)
                          )}
                        </div>
                      ))}
                    </div>

                    {filteredAndSortedObjects.length === 0 && (
                      <div className="flex items-center justify-center h-40 text-muted-foreground">
                        {emptyMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Object Detail Panel */}
              {selectedObject && (
                <div
                  className="panel-corners"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(0px)",
                    boxShadow: "0 0 100px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="bg-transparent border border-border/100 p-4 h-[600px] relative panel-corners-inner">
                    {renderDetail(selectedObject)}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar - Bottom Row */}
            <div
              className="flex gap-4 panel-corners"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0px)",
                boxShadow: "0 0 100px rgba(0,0,0,0.5)",
              }}
            >
              <div className="bg-transparent border border-border/100 flex-1 pl-4 panel-corners-inner">
                <ActionBar
                  onEquip={handleEquip}
                  onDeconstruct={handleDeconstruct}
                  onBack={handleBack}
                  isEquipped={equippedObjectId === selectedObject?.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
