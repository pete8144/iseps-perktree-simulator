import { BLUE_PERKS } from './perk-blue'
import { BURGUNDY_PERKS } from './perk-burgundy'
import { GREEN_PERKS } from './perk-green'
import { LIME_PERKS } from './perk-lime'
import { ORANGE_PERKS } from './perk-orange'
import { PURPLE_PERKS } from './perk-purple'
import { RED_PERKS } from './perk-red'
import { TEAL_PERKS } from './perk-teal'
import { WHITE_PERKS } from './perk-white'
import { YELLOW_PERKS } from './perk-yellow'

export * from './perk-blue'
export * from './perk-burgundy'
export * from './perk-green'
export * from './perk-lime'
export * from './perk-orange'
export * from './perk-purple'
export * from './perk-red'
export * from './perk-teal'
export * from './perk-white'
export * from './perk-yellow'

export const ALL_PERKS = [
  ...RED_PERKS,
  ...BLUE_PERKS,
  ...YELLOW_PERKS,
  ...LIME_PERKS,
  ...PURPLE_PERKS,
  ...ORANGE_PERKS,
  ...GREEN_PERKS,
  ...WHITE_PERKS,
  ...BURGUNDY_PERKS,
  ...TEAL_PERKS,
]
