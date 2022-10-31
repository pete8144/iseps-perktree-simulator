import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_R1: PerkConfig = {
  code: 'R1',
  type: PERK_TYPES.RED,
  parents: [],
  direction: 45,
  name: 'Cybernetic Brain Modifications',
  bonus: [
    '+50% total Alpha output for each perk purchased in red path',
    '+10% total alpha particle life time',
    'Divides Alpha costs by 10 for each perk purchased in red path',
    'Greatly improves the power and cost of Research 1 (+30% -> +100% / 1k cash -> 1b cash)',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const PERK_R2: PerkConfig = {
  code: 'R2',
  type: PERK_TYPES.RED,
  parents: ['R1'],
  direction: 45,
  name: 'Smart AI Assistance',
  bonus: [
    '+20% total Alpha output for each perk purchased in red path',
    'Auto-purchases all tier 1, 2, 3 & 4 researches (must have cash to purchase a full tier once for it to happen)',
    '+100% to the amount of researches purchased when acquiring a new research',
    'Greatly improves the power and cost of Research 2 (+50% -> +75% / 10k cash -> 10b cash',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const PERK_R3: PerkConfig = {
  code: 'R3',
  type: PERK_TYPES.RED,
  parents: ['R2'],
  direction: 90,
  name: 'Improved Automation Technology',
  bonus: [
    '+130% total Alpha output for each perk purchased in red path',
    'Auto-purchases all tier 5, 6 & 7 researches (must have cash to purchase a full tier once for it to happen)',
    '-1 sec to all basic automations',
    'Greatly improves the power and cost of Research 3 (+15% -> +30% / 150k cash -> 50b cash)',
  ],
}

export const PERK_R4: PerkConfig = {
  code: 'R4',
  type: PERK_TYPES.RED,
  parents: ['R3'],
  direction: 0,
  name: 'Overclocked Automation',
  bonus: [
    '+200% total Alpha output for each perk purchased in red path',
    'Auto-purchases all tier 8, 9 & 10 researches (must have cash to purchase a full tier once for it to happen)',
    '-1 sec to all basic automations',
    'Greatly improves the power and cost of Research 4 (-40% -> -90% / 500k cash -> 5qa cash)',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const PERK_R5: PerkConfig = {
  code: 'R5',
  type: PERK_TYPES.RED,
  parents: ['R4'],
  direction: 270,
  name: 'Alpha Singularity Servers',
  bonus: [
    '+3% total Alpha output for each perk purchased in any path',
    'Greatly improves the power and cost of Research 5 (-50% -> -90% / 10m cash -> 7qa cash)',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const PERK_R6: PerkConfig = {
  code: 'R6',
  type: PERK_TYPES.RED,
  parents: ['R4'],
  direction: 0,
  name: 'Research Equals Solutions?',
  bonus: [
    '+0.1% total solutions gained for each research purchased for each perk purchased in red path',
    'Greatly improves the power and cost of Research 6 (+200% -> +500% / 50m cash -> 100Qu cash)',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const PERK_R7: PerkConfig = {
  code: 'R7',
  type: PERK_TYPES.RED,
  parents: ['R5'],
  direction: 0,
  name: 'Data Cube Research Targeting',
  bonus: [
    '+0.1% total solutions gained for each research purchased for each perk purchased in red path',
    'Greatly improves the power and cost of Research 7 (+100% -> +300% / 200m cash -> 200sx cash)',
  ],
  effects: [
    {
      unit: '',
      amount: '',
      notes: [''],
    },
  ],
}

export const RED_PERKS = [
  PERK_R1,
  PERK_R2,
  PERK_R3,
  PERK_R4,
  PERK_R5,
  PERK_R6,
  PERK_R7,
]
