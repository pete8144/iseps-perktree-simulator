// @ts-nocheck

import * as formatter from './formatter'

test('format percent', () => {
  expect(formatter.formatPercent(150)).toBe('+150%')
  expect(formatter.formatPercent(1300)).toBe('+1.3k%')
  expect(formatter.formatPercent(12560000)).toBe('+12.56m%')
})
