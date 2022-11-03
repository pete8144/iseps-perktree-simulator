// @ts-nocheck

import * as formatter from '../formatter'
import * as bonus from './perk-white'

test('format percent', () => {
  const fn = (perks: string[]) =>
    formatter.formatPercent(bonus.getSeDcPercentBonus(perks))

  const se = (n, w = []) => [...Array(n - w.length).fill('A1'), ...w]

  expect(fn(se(1))).toBe('+50%')
  expect(fn(se(2))).toBe('+106%')
  expect(fn(se(3))).toBe('+174%')
  expect(fn(se(4, ['W1']))).toBe('+260%')
  expect(fn(se(5, ['W1', 'W3']))).toBe('+555%')
  expect(fn(se(6, ['W1', 'W3']))).toBe('+765%')
  expect(fn(se(9, ['W1', 'W3']))).toBe('+1,755%')
  expect(fn(se(10, ['W1', 'W3']))).toBe('+2,235%')
})
