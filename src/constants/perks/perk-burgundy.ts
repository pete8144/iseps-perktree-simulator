import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_BU1: PerkConfig = {
  code: 'Bu1',
  type: PERK_TYPES.BURGUNDY,
  parents: ['W5'],
  direction: 45,
  name: 'Helion Accumulator',
  bonus: [
    '+20% total Helion particle output for each perk purchased in burgundy path',
    '+10% total Corvus extractions multiplier for each perk purchased in burgundy path',
    '+30% total Energy Price for each perk purchased in burgundy path',
  ],
}

export const PERK_BU2: PerkConfig = {
  code: 'Bu2',
  type: PERK_TYPES.BURGUNDY,
  parents: ['Bu1'],
  direction: 0,
  name: 'Helion Generator',
  bonus: [
    '+30% total Helion particle output for each perk purchased in burgundy path',
    '+10% total Corvus extractions multiplier for each perk purchased in burgundy path',
    '+8% total Helion spawn rate for each perk purchased in burgundy path',
    '+8% total Helion life time for each perk purchased in burgundy path',
  ],
}

export const PERK_BU3: PerkConfig = {
  code: 'Bu3',
  type: PERK_TYPES.BURGUNDY,
  parents: ['Bu2'],
  direction: 0,
  name: 'Helion Satisfactory',
  bonus: [
    '+70% total Helion particle output for each perk purchased in burgundy path',
    '+10% total Corvus extractions multiplier for each perk purchased in burgundy path',
    '+20% total Energy Price for each perk purchased in burgundy path',
    '+10% total Buyers for each perk purchased in burgundy path',
  ],
}

export const BURGUNDY_PERKS = [PERK_BU1, PERK_BU2, PERK_BU3]
