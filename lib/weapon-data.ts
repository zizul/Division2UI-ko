export type WeaponRarity = "Standard" | "Superior" | "High-End" | "Gear Set";
export type WeaponCategory = "Assault Rifle" | "SMG" | "Rifle" | "LMG" | "Shotgun" | "Pistol" | "Marksman Rifle";
export type SortOption = "score" | "damage" | "rpm" | "name";

export interface Weapon {
  id: string;
  name: string;
  category: WeaponCategory;
  rarity: WeaponRarity;
  score: number;
  damage: number;
  rpm: number;
  magazine: number;
  accuracy: number;
  reloadTime: number;
  image: string;
  damageChange?: number;
  rpmChange?: number;
  magChange?: number;
  talents?: string[];
  mods?: {
    optic?: string;
    magazine?: string;
    underbarrel?: string;
    muzzle?: string;
  };
}

export const weapons: Weapon[] = [
  {
    id: "1",
    name: "Surplus SVD",
    category: "Marksman Rifle",
    rarity: "High-End",
    score: 265,
    damage: 17300,
    rpm: 260,
    magazine: 10,
    accuracy: 78,
    reloadTime: 2.9,
    image: "/weapons/svd.jpg",
    damageChange: 5,
    talents: ["Ranger", "Optimist"],
  },
  {
    id: "2",
    name: "Military G36",
    category: "Assault Rifle",
    rarity: "High-End",
    score: 263,
    damage: 4400,
    rpm: 750,
    magazine: 30,
    accuracy: 65,
    reloadTime: 2.3,
    image: "/weapons/g36.jpg",
    damageChange: -2,
    rpmChange: 3,
    magChange: 5,
    talents: ["Measured", "Strained"],
  },
  {
    id: "3",
    name: "Tommy Gun",
    category: "SMG",
    rarity: "Superior",
    score: 260,
    damage: 3900,
    rpm: 800,
    magazine: 50,
    accuracy: 45,
    reloadTime: 2.5,
    image: "/weapons/tommy.jpg",
    damageChange: -8,
    rpmChange: 5,
    magChange: 10,
    talents: ["Fast Hands"],
  },
  {
    id: "4",
    name: "Police Mk17",
    category: "Rifle",
    rarity: "High-End",
    score: 260,
    damage: 13400,
    rpm: 275,
    magazine: 20,
    accuracy: 72,
    reloadTime: 2.7,
    image: "/weapons/mk17.jpg",
    damageChange: -3,
    rpmChange: 2,
    magChange: 5,
    talents: ["Boomerang", "Ranger"],
  },
  {
    id: "5",
    name: "USC .45 ACP",
    category: "SMG",
    rarity: "Standard",
    score: 253,
    damage: 7200,
    rpm: 420,
    magazine: 20,
    accuracy: 55,
    reloadTime: 2.1,
    image: "/weapons/usc45.jpg",
    damageChange: -12,
    rpmChange: -5,
    magChange: 2,
    talents: ["Allegro"],
  },
  {
    id: "6",
    name: "Tactical Super 90 SBS",
    category: "Shotgun",
    rarity: "Gear Set",
    score: 252,
    damage: 23000,
    rpm: 176,
    magazine: 8,
    accuracy: 35,
    reloadTime: 5.2,
    image: "/weapons/super90.jpg",
    damageChange: 12,
    rpmChange: -8,
    magChange: -2,
    talents: ["Pummel", "Close & Personal"],
  },
  {
    id: "7",
    name: "Military P416",
    category: "Assault Rifle",
    rarity: "High-End",
    score: 258,
    damage: 5100,
    rpm: 720,
    magazine: 30,
    accuracy: 68,
    reloadTime: 2.4,
    image: "/weapons/g36.jpg",
    damageChange: 2,
    rpmChange: -1,
    talents: ["Killer", "Spike"],
  },
  {
    id: "8",
    name: "Infantry MG5",
    category: "LMG",
    rarity: "High-End",
    score: 261,
    damage: 3200,
    rpm: 800,
    magazine: 100,
    accuracy: 42,
    reloadTime: 5.8,
    image: "/weapons/lmg.jpg",
    damageChange: -5,
    rpmChange: 8,
    magChange: 15,
    talents: ["Unhinged", "Frenzy"],
  },
  {
    id: "9",
    name: "M1911 Tactical",
    category: "Pistol",
    rarity: "Superior",
    score: 248,
    damage: 9800,
    rpm: 310,
    magazine: 7,
    accuracy: 82,
    reloadTime: 1.5,
    image: "/weapons/pistol.jpg",
    talents: ["Finisher"],
  },
];

export const categoryIcons: Record<WeaponCategory, string> = {
  "Assault Rifle": "⚔",
  "SMG": "≡",
  "Rifle": "◈",
  "LMG": "▤",
  "Shotgun": "‖",
  "Pistol": "◇",
  "Marksman Rifle": "⊕",
};

export const rarityColors: Record<WeaponRarity, string> = {
  "Standard": "text-blue-stat",
  "Superior": "text-superior",
  "High-End": "text-orange-glow",
  "Gear Set": "text-gear-set",
};

export const rarityBgColors: Record<WeaponRarity, string> = {
  "Standard": "bg-blue-stat/20 border-blue-stat/50",
  "Superior": "bg-superior/20 border-superior/50",
  "High-End": "bg-orange-glow/20 border-orange-glow/50",
  "Gear Set": "bg-gear-set/20 border-gear-set/50",
};

export function formatDamage(damage: number): string {
  if (damage >= 1000) {
    return `${(damage / 1000).toFixed(1)}k`;
  }
  return damage.toString();
}
