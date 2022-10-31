import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_O1: PerkConfig = {
  code: 'O1',
  type: PERK_TYPES.ORANGE,
  parents: [],
  direction: 180,
  name: 'Fenix Nutrition Supplements',
  bonus: [
    '+1000% total Fenix output for each perk purchased in orange path',
    'Divides Fenix costs by 50 for each perk purchased in orange path',
    '+200% to the amount of Rebirthologists acquired in the Fenix Insitiute',
    "Unlocks full Fenix Institute Automation (starts at 1s, can't be upgraded with LP)",
  ],
}

export const PERK_O2: PerkConfig = {
  code: 'O2',
  type: PERK_TYPES.ORANGE,
  parents: ['O1'],
  direction: 225,
  name: 'Rebirthobot',
  bonus: [
    '+1500% total Fenix output for each perk purchased in orange path',
    'Divides Fenix costs by 150 for each perk purchased in orange path',
    '+300% to the amount of Rebirthologists acquired in the Fenix Insitiute',
    'Unlocks Rebirthobots in the Fenix Institute (you get 1 for every 10k regular Rebirthologist, max 20, +100% bonus to Fenix Institute output per RB)',
  ],
}

export const PERK_O3: PerkConfig = {
  code: 'O3',
  type: PERK_TYPES.ORANGE,
  parents: ['O2'],
  direction: 225,
  name: 'DNA Infusion',
  bonus: [
    '+2500% total Fenix output for each perk purchased in orange path',
    'Divides Fenix costs by 300 for each perk purchased in orange path',
    '+35% base amont added to the original bonus from DNA Infusion for every perk in orange path',
    'Divides DNA Infusion costs by 250 for each perk purchased in orange path',
  ],
}

export const PERK_O4: PerkConfig = {
  code: 'O4',
  type: PERK_TYPES.ORANGE,
  parents: ['O3'],
  direction: 180,
  name: 'Singularity Expansion Chipset',
  bonus: [
    '+5000% total Fenix output for each perk purchased in orange path',
    '+4% total Singularity Cubes gained for each Rebirthobot currently active in the Fenix Institute',
    '+10 maximum Rebirthobots (these 10 new RBs are unlocaked starting at 500k regular Rebirthologists, increasing with +1 at every 500k interval)',
  ],
}

export const PERK_O5: PerkConfig = {
  code: 'O5',
  type: PERK_TYPES.ORANGE,
  parents: ['O3'],
  direction: 135,
  name: 'Constructobots',
  bonus: [
    '+5000% total Fenix output for each perk purchased in orange path',
    'Divides Fenix costs by 500 for each perk purchased in orange path',
    '+1000% to the amount of rebirthologists acquired in the Fenix Institute',
    '+125% base amount added to the original bonus from Constructing MOre Institutes for every perk in orange path',
  ],
}

export const PERK_O6: PerkConfig = {
  code: 'O6',
  type: PERK_TYPES.ORANGE,
  parents: ['O4'],
  direction: 180,
  name: 'G-Corp Enhancer-Panel',
  bonus: [
    '+7500% total Fenix output for each perk purchased in orange path',
    '+30% total G-Points gained for each Rebirthobot currently active in the Fenix Institute',
    'Rebirthobots give +400% bonus per Rebirthobot (+100% bonus per RB -> +500% bonus per RB)',
  ],
}

export const PERK_O7: PerkConfig = {
  code: 'O7',
  type: PERK_TYPES.ORANGE,
  parents: ['O5'],
  direction: 135,
  name: 'Rebirthobot',
  bonus: [
    '+10000% total Fenix output for each perk purchased in orange path',
    'Divides Fenix costs by 1000 for each perk purchased in orange path',
    '+145% base amount added to the original bonus from DNA Infustion for every perk in orange path',
    'The Fenix Institute now also gives a minor bonus to Data Cubes gained',
  ],
}

export const ORANGE_PERKS = [
  PERK_O1,
  PERK_O2,
  PERK_O3,
  PERK_O4,
  PERK_O5,
  PERK_O6,
  PERK_O7,
]
