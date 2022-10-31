export const MIN_SE = 1
export const MAX_SE = 50

export enum PERK_TYPES {
  RED = 'RED',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  LIME = 'LIME',
  PURPLE = 'PURPLE',
  ORANGE = 'ORANGE',
  GREEN = 'GREEN',
  WHITE = 'WHITE',
  BURGUNDY = 'BURGUNDY',
  TEAL = 'TEAL',
  INFINITY = 'INFINITY',
}

export const PERK_COLOR = {
  [PERK_TYPES.RED]: 0xeb4a66,
  [PERK_TYPES.BLUE]: 0x4ca7f8,
  [PERK_TYPES.YELLOW]: 0xfae45e,
  [PERK_TYPES.LIME]: 0xe4fe63,
  [PERK_TYPES.PURPLE]: 0xbf75f8,
  [PERK_TYPES.ORANGE]: 0xee7a41,
  [PERK_TYPES.GREEN]: 0x6bdf72,
  [PERK_TYPES.WHITE]: 0xffffff,
  [PERK_TYPES.BURGUNDY]: 0xcd5c8e,
  [PERK_TYPES.TEAL]: 0x77c4e0,
  [PERK_TYPES.INFINITY]: 0xffffff,
}

export type PerkCode = string

export type PerkConfig = {
  code: PerkCode
  type: PERK_TYPES
  distanceMultiplier?: number
  parents: string[]
  direction: 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315
  name: string
  bonus: string[]
  effects?: [
    {
      unit: string
      amount: string
      notes: string[]
    },
  ]
}
