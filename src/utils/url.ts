import qs from 'qs'

import { MAX_SE, MIN_SE } from '../constants'

export const decodePerks = (code: string): string[] => {
  return []
}

export const encodePerks = (perks: string[]): string => {
  return ''
}

export const readFromQs = (): { se?: number; perks?: string[] } => {
  const params = qs.parse(window.location.search.substring(1))

  // @ts-ignore
  const se = parseInt(params.se, 10)

  if (Number.isInteger(se) && se >= MIN_SE && se <= MAX_SE) {
    return { se }
  }

  if (params.perks && typeof params.perks === 'string') {
    return { perks: decodePerks(params.perks) }
  }

  return {}
}

export const saveSeToQs = (se: number) => {
  if (Number.isInteger(se) && se >= MIN_SE && se <= MAX_SE) {
    window.history.replaceState(null, '', '?se=' + se)
  }
}

export const savePerksToQs = (perks: string[]) => {
  // const p = encodePerks(perks)
  // window.history.replaceState(null, '', '?perks=' + p)
  window.history.replaceState(null, '', '?')
}
