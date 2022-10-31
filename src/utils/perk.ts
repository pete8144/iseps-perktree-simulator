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
