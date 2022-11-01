// @ts-nocheck

import * as formatter from '../formatter'
import * as bonus from './perk-white'

test('format percent', () => {
  const fn = (perks: string[]) =>
    formatter.formatPercent(bonus.getSeDcPercentBonus(perks))

  expect(fn(['B1'])).toBe('+50%')
  expect(fn(['B1', 'B2'])).toBe('+106%')
  expect(fn(['B1', 'B2', 'B3'])).toBe('+174%')
  expect(fn(['B1', 'B2', 'B3', 'W1'])).toBe('+260%')
  expect(fn(['B1', 'B2', 'B3', 'W1', 'W3'])).toBe('+555%')
})
