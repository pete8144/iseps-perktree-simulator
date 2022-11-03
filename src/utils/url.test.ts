// @ts-nocheck

import * as url from './url'

test('encode perks', () => {
  expect(
    url.encodePerks([
      'R1',
      'R2',
      'R3',
      'R4',
      'R5',
      'R6',
      'R7',
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'Y1',
      'Y2',
      'Y3',
      'Y4',
      'Y5',
      'Y6',
      'Y7',
    ]),
  ).toBe('RBY')
  expect(
    url.encodePerks([
      'R1',
      'R2',
      'R3',
      'R4',
      'R5',
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'P1',
      'P3',
      'P4',
      'P5',
      'P6',
      'Bu1',
      'Bu2',
      'W1',
      'W3',
      'W4',
      'T1',
      'T2',
      'T3',
      'T5',
      'T6',
    ]),
  ).toBe('R1-5BP1,3-6W1,3,4Bu1,2T1-3,5,6')
})

test('decode perks', () => {
  expect(url.decodePerks('RBY')).toMatchSnapshot()
  expect(url.decodePerks('R1-5B1,3P1,3-6Bu1-3W1,3,4')).toMatchSnapshot()
  expect(url.decodePerks('W1,3,6,8-10Ip6')).toMatchSnapshot()
})
