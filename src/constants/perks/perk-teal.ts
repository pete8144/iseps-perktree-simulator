import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_T1: PerkConfig = {
  code: 'T1',
  type: PERK_TYPES.TEAL,
  parents: ['W10'],
  direction: 180,
  name: 'Tiberius SC4V-D0G',
  bonus: [
    '+300% total Ixion output for each perk purchased in teal path',
    '+20% Emblems acquired for each perk purchased in teal path',
    '+5% SC gained for each perk purchased in teal path',
    'Emblem Milestone 1 persists through Simulation resets',
  ],
}

export const PERK_T2: PerkConfig = {
  code: 'T2',
  type: PERK_TYPES.TEAL,
  parents: ['T1'],
  direction: 270,
  name: 'Tiberius Task Team',
  bonus: [
    '+400% total Ixion output for each perk purchased in teal path',
    '+20% Emblems acquired for each perk purchased in teal path',
    '+5% Tasks completed for each perk purchased in teal path',
    'Emblem Milestone 2 persists through Simulation resets',
  ],
}

export const PERK_T3: PerkConfig = {
  code: 'T3',
  type: PERK_TYPES.TEAL,
  parents: ['T2'],
  direction: 270,
  name: 'Emblem Memory Chip',
  bonus: [
    '+500% total Ixion output for each perk purchased in teal path',
    '+30% Emblems acquired for each perk purchased in teal path',
    '+1% of spent Emblems are retained when performing a Simulation reset for each perk purchased in teal path',
    'Emblem Milestone 3 persists through Simulation resets',
  ],
}

export const PERK_T4: PerkConfig = {
  code: 'T4',
  type: PERK_TYPES.TEAL,
  parents: ['T3'],
  direction: 225,
  name: 'Epsi-Tech N4V-B0T',
  bonus: [
    'Unlocks Tiberius Epsilon Emblems',
    'Emblem Milestone 4 persists through Simulation resets',
    'Emblem Milestone 5 persists through Simulation resets',
    'Emblem Milestone 6 persists through Simulation resets',
  ],
}

export const PERK_T5: PerkConfig = {
  code: 'T5',
  type: PERK_TYPES.TEAL,
  parents: ['T4'],
  direction: 90,
  name: 'Milestone Enhancement Chip',
  bonus: [
    '+100% to the amount of Emblem Milestones purchased when acquiring a new Milestone',
    'Emblem Milestone 7 persists through Simulation resets',
  ],
}

export const PERK_T6: PerkConfig = {
  code: 'T6',
  type: PERK_TYPES.TEAL,
  parents: ['T4'],
  direction: 135,
  name: 'Feni-Tech N4V-B0T',
  bonus: [
    'Unlocks Tiberius Fenix Emblems',
    'Emblem Milestone 8 persists through Simulation resets',
    'Emblem Milestone 9 persists through Simulation resets',
    'Emblem Milestone 10 persists through Simulation resets',
  ],
}

export const PERK_T7: PerkConfig = {
  code: 'T7',
  type: PERK_TYPES.TEAL,
  parents: ['T6'],
  direction: 90,
  name: 'Ixo-Tech Hybrid Printer',
  bonus: [
    '+50% Emblems acquired for each perk purchased in teal path',
    '+30% DC gained for each perk purchased in teal path',
    '+10% SC gained for each perk purchased in teal path',
    'Unlock Emblem Purchasing Automation',
  ],
}

export const TEAL_PERKS = [
  PERK_T1,
  PERK_T2,
  PERK_T3,
  PERK_T4,
  PERK_T5,
  PERK_T6,
  PERK_T7,
]
