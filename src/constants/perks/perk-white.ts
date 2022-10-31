import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_W1: PerkConfig = {
  code: 'W1',
  type: PERK_TYPES.WHITE,
  parents: [],
  direction: 90,
  name: 'Inner Focus',
  bonus: [
    '+10% total All Particles output for each perk purchased in any path',
    '+50% total Energy Price for each perk purchased in white path',
    '+100% total Buyers for each perk purchased in white path',
    'Greatly improves the power and cost of DCM 1 (+100% -> +200% / 0.07 -> 7m)',
  ],
}

export const PERK_W2: PerkConfig = {
  code: 'W2',
  type: PERK_TYPES.WHITE,
  parents: ['W1'],
  direction: 45,
  name: 'Singularity Projector',
  bonus: [
    '+20% total All Particles output for each perk purchased in any path',
    '+25% total Energy Price for each perk purchased in white path',
    'Greatly improves the power and cost of DCM 2 (+20% -> +80% / 10 -> 1b)',
  ],
}

export const PERK_W3: PerkConfig = {
  code: 'W3',
  type: PERK_TYPES.WHITE,
  parents: ['W1'],
  direction: 90,
  name: 'DC-Watch',
  bonus: [
    '+10% total All Particles output for each perk purchased in any path',
    '+100% to the amount of DC Milestones purchased when acquiring a new milestone',
    '+50% total Data Cubes bonus from acquiring perks',
    'Greatly improves the power and cost of DCM 3 (Cost/8 -> Cost/24 / 100 -> 10t)',
  ],
}

export const PERK_W4: PerkConfig = {
  code: 'W4',
  type: PERK_TYPES.WHITE,
  parents: ['W1'],
  direction: 135,
  name: 'SC-Watch',
  bonus: [
    '+10% total All Particles output for each perk purchased in any path',
    '+25% total Energy Price for each perk purchased in white path',
    '+1% total Singularity Cubes gained for each perk purchased in any path',
    '+1 max level to all Infinity Multipliers',
  ],
}

export const PERK_W5: PerkConfig = {
  code: 'W5',
  type: PERK_TYPES.WHITE,
  parents: ['W2'],
  direction: 90,
  name: 'Monetization Bot',
  bonus: [
    '+130% total Energy Price for each perk purchased in white path',
    '+100% total Buyers for each perk purchased in white path',
    'Greatly improves the power and cost of DCM 4 (Cost/6 -> Cost/100 / 1000 -> 5qa)',
  ],
}

export const PERK_W6: PerkConfig = {
  code: 'W6',
  type: PERK_TYPES.WHITE,
  parents: ['W3'],
  direction: 90,
  name: 'DC-Scanner',
  bonus: [
    '+10% total All Particles output for each perk purchased in any path',
    '+75% total Data Cubes bonus from acquiring perks',
    'Greatly improves the power and cost of DCM 5 (40% -> 70% / 10000 -> 25qa)',
  ],
}

export const PERK_W7: PerkConfig = {
  code: 'W7',
  type: PERK_TYPES.WHITE,
  parents: ['W4'],
  direction: 90,
  name: 'SC-Printer',
  bonus: [
    '+20% total All Particles output for each perk purchased in any path',
    '+1.5% total Singularity Cubes gained for each perk purchased in any path',
  ],
}

export const PERK_W8: PerkConfig = {
  code: 'W8',
  type: PERK_TYPES.WHITE,
  parents: ['W6'],
  direction: 90,
  name: 'DC-Jetpack',
  bonus: [
    '+100% to the amount of DC Milestones purchased when acquiring a new milestone',
    '+25% total Data Cubes bonus from acquiring perks',
  ],
}

export const PERK_W9: PerkConfig = {
  code: 'W9',
  type: PERK_TYPES.WHITE,
  parents: ['W8'],
  direction: 90,
  name: 'Data Drone',
  bonus: [
    '+30% total All Particles output for each perk purchased in any path',
    '+1% total Data Cubes bonus from acquiring perks for each perk in any path (unique multiplier)',
  ],
}

export const PERK_W10: PerkConfig = {
  code: 'W10',
  type: PERK_TYPES.WHITE,
  parents: ['W9'],
  direction: 90,
  name: 'Trinity Bots',
  bonus: [
    '+1% Solutions acquired for each perk purchased in any path',
    '+1% G-Points gained for each perk purchased in any path',
    '+1% Emblems acquired for each perk purchased in any path',
  ],
}

export const WHITE_PERKS = [
  PERK_W1,
  PERK_W2,
  PERK_W3,
  PERK_W4,
  PERK_W5,
  PERK_W6,
  PERK_W7,
  PERK_W8,
  PERK_W9,
  PERK_W10,
]
