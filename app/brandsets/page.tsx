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
  { value: "brand", label: "Brand A-Z" },
  { value: "bonus1", label: "1pc Bonus" },
  { value: "bonus2", label: "2pc Bonus" },
  { value: "bonus3", label: "3pc Bonus" },
];

function brandSetFilterFn(brandSet: BrandSet, category: string): boolean {
  return brandSet.coreAttribute === category;
}

function brandSetSortFn(a: BrandSet, b: BrandSet, sortBy: string): number {
  switch (sortBy as BrandSetSortOption) {
    case "brand":
      return a.brand.localeCompare(b.brand);
    case "bonus1":
      return extractBonusValue(b.bonus1Piece) - extractBonusValue(a.bonus1Piece);
    case "bonus2":
      return extractBonusValue(b.bonus2Piece) - extractBonusValue(a.bonus2Piece);
    case "bonus3":
      return extractBonusValue(b.bonus3Piece) - extractBonusValue(a.bonus3Piece);
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
      defaultSortBy="brand"
    />
  );
}
