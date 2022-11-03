import { PERK_50 } from '../constants/perks/recommendation'

export const getRecommendedPerks = (
  se: number,
): { perks: string[]; pick: string[]; drop: string[]; notes: string[] } => {
  const result = {
    perks: new Set<string>(),
    pick: new Array<string>(),
    drop: new Array<string>(),
    notes: new Array<string>(),
  }

  for (let i = 0; i < se; i++) {
    result.pick = [...PERK_50[i].pick]
    result.drop = [...PERK_50[i].drop]
    result.pick.forEach(result.perks.add, result.perks)
    result.drop.forEach(result.perks.delete, result.perks)
  }

  return { ...result, perks: Array.from(result.perks) }
}

export const countPerks = (perks: []) => {
  const count = (type: string) =>
    perks.filter((p) => new RegExp(`^${type}\d+$`).test(p)).length

  const result = {
    total: perks.length,
    redRaw: count('R'),
    blueRaw: count('B'),
    yellowRaw: count('Y'),
    limeRaw: count('L'),
    purpleRaw: count('P'),
    orangeRaw: count('O'),
    greenRaw: count('G'),
    whiteRaw: count('W'),
    burgundyRaw: count('Bu'),
    tealRaw: count('T'),
    infinity: perks.filter((p) => p === 'IP').length,
  }

  return {
    ...result,
    red: result.redRaw + result.infinity,
    blue: result.blueRaw + result.infinity,
    yellow: result.yellowRaw + result.infinity,
    lime: result.limeRaw + result.infinity,
    purple: result.purpleRaw + result.infinity,
    orange: result.orangeRaw + result.infinity,
    green: result.greenRaw + result.infinity,
    white: result.whiteRaw + result.infinity,
    burgundy: result.burgundyRaw + result.infinity,
    tealRaw: count('T'),
  }
}

export const validateTree = (perks: string[]): string | null => {
  const se = perks.length
  // W + L at se3
  // P + O at se5
  // G at se8

  const morePerksText = (num: number) =>
    num === 1 ? '1 more perk' : num + ' more perks'

  const rbyCount = perks.filter((p) => /^[RBY]\d+$/.test(p)).length
  const wlCount = perks.filter((p) => /^[WL]\d+$/.test(p)).length
  const poCount = perks.filter((p) => /^[PO]\d+$/.test(p)).length
  const gCount = perks.filter((p) => /^G\d+$/.test(p)).length
  const ipCount = perks.filter((p) => p === 'IP').length

  if (wlCount > 0 && se <= 2) {
    return "You mustn't select White or Lime perks before SE3"
  }

  if (se >= 3 && rbyCount < 2) {
    return 'You needs ' + morePerksText(2 - rbyCount) + ' from R/B/Y paths'
  }

  if (poCount > 0 && se < 5) {
    return "You mustn't select Purple or Orange perks before SE5"
  }

  if (poCount > 0 && se >= 5 && rbyCount + wlCount < 4) {
    return (
      'You needs ' +
      morePerksText(4 - rbyCount - wlCount) +
      ' from R/B/Y/W/L paths'
    )
  }

  if (gCount > 0 && se < 8) {
    return "You mustn't select Green perks before SE8"
  }

  if (ipCount > 0 && se - ipCount < 50) {
    return 'You must have at least 50 normal perks before purchasing an IP'
  }

  return null
}

export const isTreeValid = (perks: string[]) => validateTree(perks) == null
