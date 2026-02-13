"use client";

import { useState } from "react";
import { ThreePanelInventory } from "@/components/inventory/three-panel-inventory";
import { WeaponCard } from "@/components/inventory/weapon-card";
import { WeaponDetail } from "@/components/inventory/weapon-detail";
import { weapons, type Weapon, type SortOption } from "@/lib/weapon-data";

const playerStats = {
  username: "ShadowAgent",
  title: "Division Operative",
  score: 263,
  armor: 67468,
  health: 32951,
  credits: 22185,
};

const weaponCategories = [
  { value: "All", label: "All" },
  { value: "Assault Rifle", label: "Assault Rifle" },
  { value: "SMG", label: "SMG" },
  { value: "Rifle", label: "Rifle" },
  { value: "LMG", label: "LMG" },
  { value: "Shotgun", label: "Shotgun" },
  { value: "Pistol", label: "Pistol" },
  { value: "Marksman Rifle", label: "Marksman Rifle" },
];

const weaponSortOptions = [
  { value: "score", label: "Score" },
  { value: "damage", label: "Damage" },
  { value: "rpm", label: "RPM" },
  { value: "name", label: "Name" },
];

function weaponFilterFn(weapon: Weapon, category: string): boolean {
  return weapon.category === category;
}

function weaponSortFn(a: Weapon, b: Weapon, sortBy: string): number {
  switch (sortBy as SortOption) {
    case "score":
      return b.score - a.score;
    case "damage":
      return b.damage - a.damage;
    case "rpm":
      return b.rpm - a.rpm;
    case "name":
      return a.name.localeCompare(b.name);
    default:
      return 0;
  }
}

export default function WeaponsPage() {
  const [equippedWeaponId, setEquippedWeaponId] = useState<string | null>("1");

  return (
    <ThreePanelInventory<Weapon>
      equippedObjectId={equippedWeaponId}
      setEquippedObjectId={setEquippedWeaponId}
      objects={weapons}
      playerStats={playerStats}
      categories={weaponCategories}
      sortOptions={weaponSortOptions}
      filterFn={weaponFilterFn}
      sortFn={weaponSortFn}
      renderCard={(weapon, isSelected, onClick) => (
        <WeaponCard weapon={weapon} isSelected={isSelected} onClick={onClick} />
      )}
      renderDetail={(weapon) => <WeaponDetail weapon={weapon} />}
      slotLabel="Primary Weapon"
      emptyMessage="No weapons found in this category"
      defaultSelectedIndex={3}
      defaultCategory="All"
      defaultSortBy="score"
    />
  );
}
