"use client";

import { useState } from "react";
import { ThreePanelInventory } from "@/components/inventory/three-panel-inventory";
import { BrandSetCard } from "@/components/inventory/brandset-card";
import { BrandSetDetail } from "@/components/inventory/brandset-detail";
import {
  brandSets,
  type BrandSet,
  type BrandSetSortOption,
  extractBonusValue,
  namedGearCount,
} from "@/lib/brandset-data";

const playerStats = {
  username: "ShadowAgent",
  title: "Division Operative",
  score: 263,
  armor: 67468,
  health: 32951,
  credits: 22185,
};

const brandSetCategories = [
  { value: "All", label: "All" },
  { value: "Armor", label: "Armor" },
  { value: "Damage", label: "Damage" },
  { value: "Skill", label: "Skill" },
];

const brandSetSortOptions = [
  { value: "core", label: "Core Attr" },
  { value: "brand", label: "Brand A-Z" },
  { value: "bonusValue", label: "1pc Value" },
  { value: "namedCount", label: "Named Gear" },
];

function brandSetFilterFn(brandSet: BrandSet, category: string): boolean {
  return brandSet.coreAttribute === category;
}

const coreOrder: Record<string, number> = { Damage: 0, Armor: 1, Skill: 2 };

function brandSetSortFn(a: BrandSet, b: BrandSet, sortBy: string): number {
  switch (sortBy as BrandSetSortOption) {
    case "core":
      // Group by core attribute, then alphabetical within group
      const coreA = coreOrder[a.coreAttribute] ?? 9;
      const coreB = coreOrder[b.coreAttribute] ?? 9;
      return coreA !== coreB ? coreA - coreB : a.brand.localeCompare(b.brand);
    case "brand":
      return a.brand.localeCompare(b.brand);
    case "bonusValue":
      // Highest 1pc bonus value first
      return extractBonusValue(b.bonus1Piece) - extractBonusValue(a.bonus1Piece);
    case "namedCount":
      // Most named items first, then by brand
      const diff = namedGearCount(b) - namedGearCount(a);
      return diff !== 0 ? diff : a.brand.localeCompare(b.brand);
    default:
      return 0;
  }
}

export default function BrandSetsPage() {
  const [equippedGearId, setEquippedGearId] = useState<string | null>(null);

  return (
    <ThreePanelInventory<BrandSet>
      equippedObjectId={equippedGearId}
      setEquippedObjectId={setEquippedGearId}
      objects={brandSets}
      playerStats={playerStats}
      categories={brandSetCategories}
      sortOptions={brandSetSortOptions}
      filterFn={brandSetFilterFn}
      sortFn={brandSetSortFn}
      renderCard={(brandSet, isSelected, onClick) => (
        <BrandSetCard brandSet={brandSet} isSelected={isSelected} onClick={onClick} />
      )}
      renderDetail={(brandSet) => <BrandSetDetail brandSet={brandSet} />}
      slotLabel="Brand Set Gear"
      emptyMessage="No brand sets found in this category"
      defaultSelectedIndex={0}
      defaultCategory="All"
      defaultSortBy="core"
    />
  );
}
