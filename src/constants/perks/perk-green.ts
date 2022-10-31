import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_G1: PerkConfig = {
  code: 'G1',
  type: PERK_TYPES.GREEN,
  parents: [],
  direction: 135,
  name: 'G-Bot (Looks mean but very happy to help)',
  bonus: [
    '+20% total Gamma output for each perk purchased in green path',
    '+1% total G-Points output for each perk purchased in any path',
    'All common companions become more powerful (scales more the higher the companion level)',
  ],
}

export const PERK_G2: PerkConfig = {
  code: 'G2',
  type: PERK_TYPES.GREEN,
  parents: ['G1'],
  direction: 180,
  name: 'G-Drillah',
  bonus: [
    '+2 free "GP per Conversion" levels & +6 max levels for each perk purchased in any path',
    '+1% total G-Points output for each perk purchased in any path',
    'All common companions cost less to upgrade (cost is divided by 100 (99% cheaper))',
  ],
}

export const PERK_G3: PerkConfig = {
  code: 'G3',
  type: PERK_TYPES.GREEN,
  parents: ['G2'],
  direction: 225,
  name: 'G-Kicks (Your companions will love you)',
  bonus: [
    '+30% total Gamma output for each perk purchased in green path',
    '+1% total G-Points output for each perk purchased in any path',
    'All uncommon companions become more powerful (scales more the higher the companion level)',
  ],
}

export const GREEN_PERKS = [PERK_G1, PERK_G2, PERK_G3]
