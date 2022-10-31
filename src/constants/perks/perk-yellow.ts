import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_Y1: PerkConfig = {
  code: 'Y1',
  type: PERK_TYPES.YELLOW,
  parents: [],
  direction: 315,
  name: 'Site-Scanner Drones',
  bonus: [
    '+1000% total Ceti output for each perk purchased in yellow path',
    'Divides Ceti cost by 25 for each perk purchased in yellow path',
    '+185% base amount added to the original bonus from Archive Outposts for every perk in yellow path',
    "Unlock full Archive Initiative Automation (starts at 1s, can't be upgraded with LP)",
  ],
}

export const PERK_Y2: PerkConfig = {
  code: 'Y2',
  type: PERK_TYPES.YELLOW,
  parents: ['Y1'],
  direction: 270,
  name: 'Archive Experts',
  bonus: [
    '+1000% total Ceti output for each perk purchased in yellow path',
    'Divides Ceti cost by 125 for each perk purchased in yellow path',
    '+100% base amount added to the original bonus from Archive Trinkets for every perk in yellow path',
    'Unlock Archive Experts in the Archive (you get 1 for every 10k regular Archeologist, max 20 AE, +100% to Archive output per AE)',
  ],
}

export const PERK_Y3: PerkConfig = {
  code: 'Y3',
  type: PERK_TYPES.YELLOW,
  parents: ['Y1'],
  direction: 315,
  name: 'Cot-Tech Excavators',
  bonus: [
    '+300% total Archive Archeologists hire amount',
    '+100% base amount added to the original bonus from Archive Trinkets for every perk in yellow path',
    'Divides Trinket cost by 300 for each perk purchased in yellow path',
    '+0.1% Energy Price for each level in tinket efficiency in the Archive Initiative',
  ],
}

export const PERK_Y4: PerkConfig = {
  code: 'Y4',
  type: PERK_TYPES.YELLOW,
  parents: ['Y2'],
  direction: 315,
  name: 'Wasta Moon Exploration Plans',
  bonus: [
    '+1600% total Ceti output for each perk purchased in yellow path',
    '+0.5% Energy Price for each Outpost acquired in the Archive',
    '+75% base amount added to the original bonus from Archive Trinkets for every perk in yellow path',
    'Archive Experts give +50% bonus per Archive Expert (+100% bonus per AE -> +150% bonus per AE)',
  ],
}

export const PERK_Y5: PerkConfig = {
  code: 'Y5',
  type: PERK_TYPES.YELLOW,
  parents: ['Y3'],
  direction: 0,
  name: 'Construction Breakthrough',
  bonus: [
    '+800% total Archive Arch-Bots construct amount',
    '+2000% base amount added to the original bonus from Archive Outposts for every perk in yellow path',
    'Divides Trinket costs by 1600 for each perk purchased in yellow path',
    'Divides Outposts costs by 7500 for each perk purchased in yellow path',
  ],
}

export const PERK_Y6: PerkConfig = {
  code: 'Y6',
  type: PERK_TYPES.YELLOW,
  parents: ['Y4', 'Y5'],
  direction: 315,
  distanceMultiplier: Math.SQRT1_2,
  name: 'Ancient Knowledge Hotspots',
  bonus: [
    '+3% total Data Cubes gained for each Archive Expert currently active in the Archive Initiative',
    '+1% total Singularity Cubes gained for each Archive Expert currently active in the Archive Initiative',
    '+10 maximum Archive Experts (these 10 new AEs are unlocked starting at 400k regular Archive Archeologist, and increasing with +1 at every 200k interval',
  ],
}

export const PERK_Y7: PerkConfig = {
  code: 'Y7',
  type: PERK_TYPES.YELLOW,
  parents: ['Y6'],
  direction: 315,
  name: 'Archeology-2-DC Converter',
  bonus: [
    '+1600% total Ceti output for each perk purchased in yellow path',
    'The Archive Initiative now also gives a minor bonus to Data Cubes gained',
    'Archive Experts give +150% bonus per Archive Expert (+150% bonus per AE -> +300% bonus per AE)',
  ],
}

export const YELLOW_PERKS = [
  PERK_Y1,
  PERK_Y2,
  PERK_Y3,
  PERK_Y4,
  PERK_Y5,
  PERK_Y6,
  PERK_Y7,
]
