// @ts-nocheck

import * as perk from './perk'

test('get recomended perks', () => {
  for (let se = 1; se <= 50; se++) {
    const { perks } = perk.getRecommendedPerks(se)

    expect(perks).toHaveLength(se)
    expect(new Set(perks).size).toBe(se)
  }
})
