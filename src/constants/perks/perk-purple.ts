import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_P1: PerkConfig = {
  code: 'P1',
  type: PERK_TYPES.PURPLE,
  parents: [],
  direction: 225,
  name: 'E-Gel',
  bonus: [
    '+100% total Epsilon output for each perk purchased in purple path',
    'Divides Epsilon costs by 10 for each perk purchased in purple path',
    '+300% to the amouunt of Solutions acquired in the City of Tomorrow',
    "Unlocks full City of Tomorrow Automaion (starts at 1s, can't be upgraded with LP)",
  ],
}

export const PERK_P2: PerkConfig = {
  code: 'P2',
  type: PERK_TYPES.PURPLE,
  parents: ['P1'],
  direction: 225,
  name: 'Solution-Boy',
  bonus: [
    '+400% total Epsilon output for each perk purchased in purple path',
    '+400% to the amouunt of Solutions acquired in the City of Tomorrow',
    'Unlocks City of Tomorrow Delta Solutions',
  ],
}

export const PERK_P3: PerkConfig = {
  code: 'P3',
  type: PERK_TYPES.PURPLE,
  parents: ['P1'],
  direction: 270,
  name: '9-G Network System',
  bonus: [
    '+2000% total Epsilon output for each perk purchased in purple path',
    'Divides Epsilon costs by 20 for each perk purchased in purple path',
    '+5 base Solutions for each perk purchased in any path',
  ],
}

export const PERK_P4: PerkConfig = {
  code: 'P4',
  type: PERK_TYPES.PURPLE,
  parents: ['P3'],
  direction: 225,
  name: 'Energy Solutions',
  bonus: [
    '+3000% total Epsilon output for each perk purchased in purple path',
    '+600% to the amouunt of Solutions acquired in the City of Tomorrow',
    'Unlocks City of Tomorrow Alpha Solutions',
  ],
}

export const PERK_P5: PerkConfig = {
  code: 'P5',
  type: PERK_TYPES.PURPLE,
  parents: ['P4'],
  direction: 180,
  name: 'Laboratory Solutions',
  bonus: [
    '+6000% total Epsilon output for each perk purchased in purple path',
    '+800% to the amouunt of Solutions acquired in the City of Tomorrow',
    'Unlocks City of Tomorrow Beta Solutions',
  ],
}

export const PERK_P6: PerkConfig = {
  code: 'P6',
  type: PERK_TYPES.PURPLE,
  parents: ['P5'],
  direction: 180,
  name: 'Electronic Solutions',
  bonus: [
    '+8000% total Epsilon output for each perk purchased in purple path',
    '+1200% to the amouunt of Solutions acquired in the City of Tomorrow',
    'Unlocks City of Tomorrow Ceti Solutions',
  ],
}

export const PERK_P7: PerkConfig = {
  code: 'P7',
  type: PERK_TYPES.PURPLE,
  parents: ['P5'],
  direction: 270,
  name: 'Data Solutions',
  bonus: [
    '+12000% total Epsilon output for each perk purchased in purple path',
    'The City of Tomorrow now also gives a minor bonus to Data Cubes gained',
  ],
}

export const PURPLE_PERKS = [
  PERK_P1,
  PERK_P2,
  PERK_P3,
  PERK_P4,
  PERK_P5,
  PERK_P6,
  PERK_P7,
]
