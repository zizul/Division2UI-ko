export type CoreAttribute = "Armor" | "Damage" | "Skill";
export type BrandSetSortOption = "brand" | "bonus1" | "bonus2" | "bonus3";

/** Extract the first numeric value from a bonus string, e.g. "30% Health" → 30 */
export function extractBonusValue(bonus: string): number {
  const match = bonus.match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

export interface BrandSet {
  id: string;
  brand: string;
  coreAttribute: CoreAttribute;
  bonus1Piece: string;
  bonus2Piece: string;
  bonus3Piece: string;
  namedChestpiece?: string;
  namedBackpack?: string;
  otherNamedGear?: string;
}

export const brandSets: BrandSet[] = [
  {
    id: "1",
    brand: "5.11 Tactical",
    coreAttribute: "Armor",
    bonus1Piece: "30% Health",
    bonus2Piece: "30% Incoming Repairs",
    bonus3Piece: "30% Hazard Protection",
    otherNamedGear: "Death Grips(10% Armor On Kill), Glove",

  },
  {
    id: "2",
    brand: "Airaldi Holdings",
    coreAttribute: "Damage",
    bonus1Piece: "10% MMR Damage",
    bonus2Piece: "13% Headshot Damage",
    bonus3Piece: "5% Damage to Armor",
    namedChestpiece: "Pristine Example(Perfect Focus)",

  },
  {
    id: "3",
    brand: "Alps Summit Armament",
    coreAttribute: "Skill",
    bonus1Piece: "18% Repair Skill",
    bonus2Piece: "30% Skill Duration",
    bonus3Piece: "30% Skill Haste",
    namedBackpack: "Percussive Maintenance(Perfect Tech Support)",
    otherNamedGear: "Motherly Love(25% Skill Health), Glove",

  },
  {
    id: "4",
    brand: "Badger Tuff",
    coreAttribute: "Armor",
    bonus1Piece: "10% Shotgun Damage",
    bonus2Piece: "5% Total Armor",
    bonus3Piece: "15% Armor on Kill",
    namedChestpiece: "Zero F's(Perfectly Unbreakable)",
    otherNamedGear: "Ammo Dump(10% Ammo Capacity), Holster",

  },
  {
    id: "5",
    brand: "Belstone Armory",
    coreAttribute: "Armor",
    bonus1Piece: "1% Armor Regen",
    bonus2Piece: "10% Armor on Kill",
    bonus3Piece: "45% Incoming Repairs",
    namedChestpiece: "Everyday Carrier(Perfectly Efficient)",
    namedBackpack: "Liquid Engineer(Perfect Bloodsucker)",

  },
  {
    id: "6",
    brand: "Brazos de Arcabuz",
    coreAttribute: "Armor",
    bonus1Piece: "10% Skill Haste",
    bonus2Piece: "1 Skill Tier",
    bonus3Piece: "50% Magazine Size",
    namedBackpack: "Hermano(Perfect Overclock)",
    otherNamedGear: "Picaro's Holster(10% Weapon Damage), Holster",

  },
  {
    id: "7",
    brand: "Ceska Vyroba s.r.o.",
    coreAttribute: "Damage",
    bonus1Piece: "8% Crit Hit Chance",
    bonus2Piece: "20% Hazard Protection",
    bonus3Piece: "90% Total Health",
    namedBackpack: "Devil's Due(Perfect Clutch)",
    otherNamedGear: "Turmoil(Bewildered talent)",

  },
  {
    id: "8",
    brand: "China Light Industries Corporation",
    coreAttribute: "Skill",
    bonus1Piece: "15% Explosive Damage",
    bonus2Piece: "20% Skill Haste",
    bonus3Piece: "25% Status Effects",
    namedBackpack: "Strategic Alignment(Perfect Shock and Awe)",

  },
  {
    id: "9",
    brand: "Douglas & Harding",
    coreAttribute: "Damage",
    bonus1Piece: "20% Pistol Damage",
    bonus2Piece: "30% Stability",
    bonus3Piece: "50% Accuracy",
    otherNamedGear: "Punch Drunk(20% Headshot Damage), Mask",

  },
  {
    id: "10",
    brand: "Electrique",
    coreAttribute: "Skill",
    bonus1Piece: "10% Status Effects",
    bonus2Piece: "20% Shock Resistance",
    bonus3Piece: "30% SMG Damage",
    namedBackpack: "Lavoisier(Perfect Galvanize)",
    otherNamedGear: "Snow Machine(Flurry talent), Kneepads",

  },
  {
    id: "11",
    brand: "Empress International",
    coreAttribute: "Skill",
    bonus1Piece: "10% Skill Health",
    bonus2Piece: "10% Skill Damage",
    bonus3Piece: "8% Skill Efficiency",
    namedChestpiece: "Ceasar's Guard(Perfectly Skilled)",
    namedBackpack: "Battery Pack(Perfectly Calculated)",

  },
  {
    id: "12",
    brand: "Fenris Group AB",
    coreAttribute: "Damage",
    bonus1Piece: "10% Assault Rifle Damage",
    bonus2Piece: "30% Reload Speed",
    bonus3Piece: "50% Stability",
    namedChestpiece: "Ferocious Calm(Perfect Overwatch)",

  },
  {
    id: "13",
    brand: "Gila Guard",
    coreAttribute: "Armor",
    bonus1Piece: "5% Total Armor",
    bonus2Piece: "60% Total Health",
    bonus3Piece: "2% Armor Regen",
    namedChestpiece: "Pointman (Perfect Vanguard)",
    otherNamedGear: "Nightwatcher(100% Scanner Pulse Haste), Mask",

  },
  {
    id: "14",
    brand: "Golan Gear Ltd",
    coreAttribute: "Armor",
    bonus1Piece: "10% Status Effect",
    bonus2Piece: "1.5% Armor Regen",
    bonus3Piece: "10% Total Armor",
    namedChestpiece: "Hunter Killer(Perfect Intimidate)",
    namedBackpack: "Anarchist's Cookbook(Perfectly Wicked)",

  },
  {
    id: "15",
    brand: "Grupo Sombra S.A.",
    coreAttribute: "Damage",
    bonus1Piece: "13% Crit Hit Damage",
    bonus2Piece: "20% Explosive Damage",
    bonus3Piece: "13% Headshot Damage",
    namedChestpiece: "Door Knocker's Knock(Perfect Spark)",
    namedBackpack: "Festive Delivery(Fireworks Show)",

  },
  {
    id: "16",
    brand: "Habsburg Guard",
    coreAttribute: "Armor",
    bonus1Piece: "13% Headshot Damage",
    bonus2Piece: "20% MMR Damage",
    bonus3Piece: "25% Status Effects",
    namedChestpiece: "Cherished(Perfect Trauma)",
    namedBackpack: "The Courier(Perfect Creeping Death)",

  },
  {
    id: "17",
    brand: "Hana-U Corporation",
    coreAttribute: "Skill",
    bonus1Piece: "10% Skill Haste",
    bonus2Piece: "10% Skill Damage",
    bonus3Piece: "15% Weapon Damage",
    namedBackpack: "Force Multiplier(Perfect Combined Arms)",

  },
  {
    id: "18",
    brand: "Imminence Armaments",
    coreAttribute: "Damage",
    bonus1Piece: "5% Weapon Damage",
    bonus2Piece: "100% Threat",
    bonus3Piece: "60% Pistol Damage",
    namedBackpack: "Cap'n(Perfect Leadership)",
    otherNamedGear: "Cloak(50% reduced threat)",

  },
  {
    id: "19",
    brand: "Lengmo",
    coreAttribute: "Armor",
    bonus1Piece: "20% Explosive Resistance",
    bonus2Piece: "20% Skill Health",
    bonus3Piece: "30% LMG Damage",
    namedChestpiece: "Carpenter(Perfect Mad Bomber)",
    namedBackpack: "Backbone(Perfectly Unstoppable Force)",

  },
  {
    id: "20",
    brand: "Legatus S.p.A",
    coreAttribute: "Damage",
    bonus1Piece: "30% Swap Speed",
    bonus2Piece: "70% Optimal Range",
    bonus3Piece: "15% Weapon Damage",
    namedBackpack: "Vigil(Perfect Versatile)",
    otherNamedGear: "Visionario(50% Optimal Range), Glove",

  },
  {
    id: "21",
    brand: "Murakami Industries",
    coreAttribute: "Skill",
    bonus1Piece: "15% Skill Duration",
    bonus2Piece: "35% Repair Skills",
    bonus3Piece: "18% Skill Damage",
    otherNamedGear: "Emporer's Guard(1% Armor Regen), Kneepads",

  },
  {
    id: "22",
    brand: "Overlord Armaments",
    coreAttribute: "Damage",
    bonus1Piece: "10% Rifle Damage",
    bonus2Piece: "30% Accuracy",
    bonus3Piece: "30% Weapon Handling",
    otherNamedGear: "Fox's Prayer(8% DTTOOC), Kneepads",

  },
  {
    id: "23",
    brand: "Palisade Steelworks",
    coreAttribute: "Armor",
    bonus1Piece: "10% Armor on Kill",
    bonus2Piece: "60% Total Health",
    bonus3Piece: "1 Skill Tier",
    namedChestpiece: "Combuster(Perfectly Explosive Delivery)",
    namedBackpack: "Proxy(Perfect Tamper Proof)",

  },
  {
    id: "24",
    brand: "Petrov Defence Group",
    coreAttribute: "Damage",
    bonus1Piece: "10% LMG Damage",
    bonus2Piece: "15% Weapon Handling",
    bonus3Piece: "50% Ammo Capacity",
    namedChestpiece: "Vedmedytsya Vest(Perfect Braced)",
    otherNamedGear: "Contractor's Gloves(8% Damage to Armor), Glove",

  },
  {
    id: "25",
    brand: "Providence Defence",
    coreAttribute: "Damage",
    bonus1Piece: "13% Headshot Damage",
    bonus2Piece: "8% Crit Hit Chance",
    bonus3Piece: "13% Crit Hit Damage",
    namedChestpiece: "The Sacrifice(Perfect Glass Cannon)",
    namedBackpack: "The Gift(Perfect Vigilance)",

  },
  {
    id: "26",
    brand: "Richter & Kaiser GmbH",
    coreAttribute: "Skill",
    bonus1Piece: "15% Incoming Repairs",
    bonus2Piece: "40% Explosive Resistance",
    bonus3Piece: "52% Repair Skills",
    otherNamedGear: "Forge(50% Shield Health), Holster",

  },
  {
    id: "27",
    brand: "Shiny Monkey Gear",
    coreAttribute: "Damage",
    bonus1Piece: "15% Skill Duration",
    bonus2Piece: "5% Skill Efficiency",
    bonus3Piece: "52% Repair Skills",
    namedBackpack: "Axel(Perfect Energize)",
    otherNamedGear: "Grease(16% Status Effects), Kneepads",

  },
  {
    id: "28",
    brand: "Sokolov Concern",
    coreAttribute: "Armor",
    bonus1Piece: "10% SMG Damage",
    bonus2Piece: "13% Crit Hit Damage",
    bonus3Piece: "8% Crit Hit Chance",
    otherNamedGear: "Firm Handshake(16% Status Effects), Glove",

  },
  {
    id: "29",
    brand: "Unit Alloys",
    coreAttribute: "Damage",
    bonus1Piece: "5% Rate of Fire",
    bonus2Piece: "20% Assault Rifle Damage",
    bonus3Piece: "50% Magazine Size",
    namedChestpiece: "Equalizer (Perfect Obliterate)",
    otherNamedGear: "Salvo (5% Rate of Fire), Holster",

  },
  {
    id: "30",
    brand: "Urban Lookout",
    coreAttribute: "Damage",
    bonus1Piece: "10% Accuracy",
    bonus2Piece: "30% Skill Duration",
    bonus3Piece: "30% MMR Damage",
    namedChestpiece: "Sleight (Perfect Protected Reload)",
    otherNamedGear: "Spot On (38% Accuracy), Holster",

  },
  {
    id: "31",
    brand: "Uzina Getica",
    coreAttribute: "Damage",
    bonus1Piece: "5% Total Armor",
    bonus2Piece: "10% Armor on Kill",
    bonus3Piece: "30% Hazard Protection",
    namedChestpiece: "Closer(Perfect Spotter)",
    namedBackpack: "The Setup(Perfectly Oppurtunistic)",

  },
  {
    id: "32",
    brand: "Walker, Harris & Co.",
    coreAttribute: "Skill",
    bonus1Piece: "5% Weapon Damage",
    bonus2Piece: "5% Damage to Armor",
    bonus3Piece: "10% Damage to Health",
    namedChestpiece: "Chainkiller(Perfect Headhunter)",
    namedBackpack: "Matador(Perfect Adreneline Rush)",

  },
  {
    id: "33",
    brand: "Wyvern Wear",
    coreAttribute: "Damage",
    bonus1Piece: "8% Skill Damage",
    bonus2Piece: "18% Status Effect",
    bonus3Piece: "45% Skill Duration",
    otherNamedGear: "Claws Out(500% Melee Damage/11% Pistol Damage), Holster",

  },
  {
    id: "34",
    brand: "Yaahl Gear",
    coreAttribute: "Damage",
    bonus1Piece: "10% Hazard Protection",
    bonus2Piece: "10% Weapon Damage",
    bonus3Piece: "40% Pulse Resistance",
    otherNamedGear: "The Hollow Man(14% Health Damage), Mask",

  },
  {
    id: "35",
    brand: "Zwiadowka SP. z o.o.",
    coreAttribute: "Damage",
    bonus1Piece: "15% Magazine Size",
    bonus2Piece: "20% Rifle Damage",
    bonus3Piece: "30% Weapon Handling",
    namedChestpiece: "Bober(Perfect Entrench)",
    otherNamedGear: "Eagle's Grasp(15% Weapon Handling), Glove",

  },
];

export const coreAttributeColors: Record<CoreAttribute, string> = {
  Armor: "text-blue-stat",
  Damage: "text-red-stat",
  Skill: "text-gear-set",
};

export const coreAttributeBgColors: Record<CoreAttribute, string> = {
  Armor: "bg-blue-stat/20 border-blue-stat/50",
  Damage: "bg-red-stat/20 border-red-stat/50",
  Skill: "bg-gear-set/20 border-gear-set/50",
};

export const coreAttributeIcons: Record<CoreAttribute, string> = {
  Armor: "🛡",
  Damage: "⚔",
  Skill: "⚡",
};
