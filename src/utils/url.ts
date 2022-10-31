import qs from 'qs'

import {
  BLUE_PERKS,
  BURGUNDY_PERKS,
  GREEN_PERKS,
  LIME_PERKS,
  MAX_SE,
  MIN_SE,
  ORANGE_PERKS,
  PURPLE_PERKS,
  RED_PERKS,
  TEAL_PERKS,
  WHITE_PERKS,
  YELLOW_PERKS,
} from '../constants'

const getAllColorPerks = (type: string) => {
  if (type === 'R') return RED_PERKS
  if (type === 'B') return BLUE_PERKS
  if (type === 'Y') return YELLOW_PERKS
  if (type === 'L') return LIME_PERKS
  if (type === 'P') return PURPLE_PERKS
  if (type === 'O') return ORANGE_PERKS
  if (type === 'G') return GREEN_PERKS
  if (type === 'W') return WHITE_PERKS
  if (type === 'Bu') return BURGUNDY_PERKS
  if (type === 'T') return TEAL_PERKS

  return []
}

const decodeColorPerks = (type?: string, index?: string): string[] => {
  const result: string[] = []

  if (!type) return result

  const allPerks = getAllColorPerks(type)
  const perkCount = allPerks.length
  if (!index) return allPerks.map((p) => p.code)

  const groups = index.split(',')

  groups.forEach((group) => {
    if (/^\d+$/.test(group)) {
      const index = parseInt(group, 10)
      if (index && index <= perkCount) {
        // @ts-ignore
        result.push(type + index)
      }
    } else if (/^\d+-\d+$/.test(group)) {
      const [a, b] = group.split('-').map((g) => parseInt(g, 10))
      if (a && b && a < b && b <= perkCount) {
        for (let i = a; i <= b; i++) {
          // @ts-ignore
          result.push(type + i)
        }
      }
    }
  })

  return result
}

export const decodePerks = (code: string): string[] => {
  const matches = code.match(/([A-Z][^A-Z]*)/g)

  if (matches) {
    return matches.reduce((acc: string[], match) => {
      const ret = /(?<perkType>[a-z]+)(?<index>.*)/gi.exec(match)
      if (ret) {
        return [
          ...acc,
          ...decodeColorPerks(ret.groups?.perkType, ret.groups?.index),
        ]
      }

      return acc
    }, [])
  }

  return []
}

export const encodePerks = (perks: string[]): string => {
  const types = [
    { type: 'R', max: RED_PERKS.length },
    { type: 'B', max: BLUE_PERKS.length },
    { type: 'Y', max: YELLOW_PERKS.length },
    { type: 'L', max: LIME_PERKS.length },
    { type: 'P', max: PURPLE_PERKS.length },
    { type: 'O', max: ORANGE_PERKS.length },
    { type: 'G', max: GREEN_PERKS.length },
    { type: 'W', max: WHITE_PERKS.length },
    { type: 'Bu', max: BURGUNDY_PERKS.length },
    { type: 'T', max: TEAL_PERKS.length },
  ]

  const ret: string[] = []

  types.forEach(({ type, max }) => {
    const indices = perks
      .reduce((acc: number[], perk) => {
        if (new RegExp('^' + type + '\\d+$').test(perk)) {
          const index = parseInt(perk.substring(type.length), 10)

          if (index && index <= max) return [...acc, index]
        }

        return acc
      }, [])
      .sort((a, b) => a - b)

    if (!indices.length) return

    if (indices.length === max) {
      ret.push(type)
      return
    }

    const groups: number[][] = []
    let last = -10
    indices.forEach((index) => {
      if (index === last + 1) {
        groups[groups.length - 1].push(index)
      } else {
        groups.push([index])
      }
      last = index
    })

    ret.push(
      type +
        groups
          .map((group) => {
            if (group.length === 1) return group[0]
            if (group.length === 2) return group[0] + ',' + group[1]
            return group[0] + '-' + group[group.length - 1]
          })
          .join(','),
    )
  })

  return ret.join('')
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
  const p = encodePerks(perks)
  window.history.replaceState(null, '', p ? '?perks=' + p : '?')
}
