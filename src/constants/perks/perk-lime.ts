import { PerkConfig, PERK_TYPES } from '../common'

export const PERK_L1: PerkConfig = {
  code: 'L1',
  type: PERK_TYPES.LIME,
  parents: [],
  direction: 270,
  name: 'Elixir of Ege',
  bonus: [
    '+1200% total Delta output for each perk purchased in lime path',
    'Divides Delta costs by 10 for each perk purchased in lime path',
    '+100% to total Artifacts gained from the Egeturium for every perk purchased in lime path',
    "Unlocks Egeturiam Artifacts Automation (Starts at 1s, can't be upgraded with LP)",
  ],
}

export const PERK_L2: PerkConfig = {
  code: 'L2',
  type: PERK_TYPES.LIME,
  parents: ['L1'],
  direction: 270,
  name: 'Relic of Reflection',
  bonus: [
    'Divides Alpha Artifact costs by 100 for each perk purchased in lime path',
    'Unlock Delta Artifacts',
    '+2% extra base amount to all particles output for AP trades for each lime perk purchased',
    'Unlock Egeturium AP/DC Trading Automation (start at 1s, can\t be upgraded with LP)',
  ],
}

export const PERK_L3: PerkConfig = {
  code: 'L3',
  type: PERK_TYPES.LIME,
  parents: ['L2'],
  direction: 315,
  name: 'Deltantlers',
  bonus: [
    '+3200% total Delta output for each perk purchased in lime path',
    'Divides Delta costs by 50 for each perk purchased in lime path',
    '+15% total Delta particle spawn rate',
    '+15% total Delta particle life time',
  ],
}

export const LIME_PERKS = [PERK_L1, PERK_L2, PERK_L3]
