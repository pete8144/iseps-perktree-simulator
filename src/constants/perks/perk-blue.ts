import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_B1: PerkConfig = {
  code: 'B1',
  type: PERK_TYPES.BLUE,
  parents: [],
  direction: 0,
  name: 'Intelli-Chips',
  bonus: [
    '+300% total Beta output for each perk purchased in blue path',
    '+25% total Beta particle sphere size',
    '+200% total Laboratory Scientists hire amount',
    "unlock full Beta Laboratory Automation (starts at 1s, can't be upgraded with LP)",
  ],
}

export const PERK_B2: PerkConfig = {
  code: 'B2',
  type: PERK_TYPES.BLUE,
  parents: ['B1'],
  direction: 315,
  name: 'Cool Scientists',
  bonus: [
    '+600% total Beta output for each perk purchased in blue path',
    'Divides beta costs by 30 for each perk purchased in blue path',
    'Divides Scientist costs by 150 for eah perk purchased in blue path',
    'Unlocks Cool Scientists in the Laboratory (you get 1 for every 10k regular scientist, max 20)',
  ],
}

export const PERK_B3: PerkConfig = {
  code: 'B3',
  type: PERK_TYPES.BLUE,
  parents: ['B1'],
  direction: 45,
  name: 'B-Assistance Bot',
  bonus: [
    '+10% base amount added to the original bonus from Laboratory Equipment for every perk in blue path',
    'Divides Equipment costs by 50 for each perk in blue path',
    '+10% base amount added to the original bonus from Laboratory Equipment for every perk in blue path',
    'Divides Morale costs by 50 for each perk in blue path',
  ],
}

export const PERK_B4: PerkConfig = {
  code: 'B4',
  type: PERK_TYPES.BLUE,
  parents: ['B2'],
  direction: 45,
  name: 'Beta-Coated Coats',
  bonus: [
    '+900% total Beta output for each perk purchased in blue path',
    'Divides beta costs by 100 for each perk purchased in blue path',
    'Divides Scientist costs by 150 for eah perk purchased in blue path',
    'Cool Scientist give +10% bonus per Cool Scientist (+100% bonus per CS -> +110% bonus per CS)',
  ],
}

export const PERK_B5: PerkConfig = {
  code: 'B5',
  type: PERK_TYPES.BLUE,
  parents: ['B4'],
  direction: 315,
  name: 'Cool Scientists Expansion Plan',
  bonus: [
    '+1200% total Beta output for each perk purchased in blue path',
    '+10 maximum Cool Scientists (these 10 new Cool Scientists are unlocked starting at 300k regular scientists, and increasing with +1 at every 100k interval)',
  ],
}

export const PERK_B6: PerkConfig = {
  code: 'B6',
  type: PERK_TYPES.BLUE,
  parents: ['B4'],
  direction: 45,
  name: 'Equipment Production Efficiency',
  bonus: [
    '+300% total Laboratory Scientists hire amount',
    'Divides Equipment costs by 50 for each perk in blue path',
    'Divides Morale costs by 50 for each perk in blue path',
  ],
}

export const PERK_B7: PerkConfig = {
  code: 'B7',
  type: PERK_TYPES.BLUE,
  parents: ['B5', 'B6'],
  direction: 0,
  distanceMultiplier: Math.SQRT1_2,
  name: 'Lab-2-DC Conversion',
  bonus: [
    'The Beta Laboratory now also gives a minor bonus to Data Cubes gained',
    'Cool Scientists give +10% bonus per cool scientist (+110% bonus per CS -> +120% bonus per CS)',
  ],
}

export const BLUE_PERKS = [
  PERK_B1,
  PERK_B2,
  PERK_B3,
  PERK_B4,
  PERK_B5,
  PERK_B6,
  PERK_B7,
]
