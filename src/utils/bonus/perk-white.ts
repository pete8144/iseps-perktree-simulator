export const getSeDcPercentBonus = (perks: string[]) => {
  const se = perks.length

  const hasW3 = perks.includes('W3')
  const hasW6 = perks.includes('W6')
  const hasW8 = perks.includes('W8')
  const hasW9 = perks.includes('W9')

  const baseBonus = (Math.pow(se, 3) + se * 49) / 100

  const bonus =
    baseBonus *
    (1 + (hasW3 ? 0.5 : 0) + (hasW6 ? 0.75 : 0) + (hasW8 ? 0.25 : 0)) *
    (1 + (hasW9 ? se / 100 : 0))

  return bonus * 100
}
