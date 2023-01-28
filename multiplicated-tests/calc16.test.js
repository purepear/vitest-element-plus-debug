/**
 * @jest-environment node
 */

import { sum } from '@/calc'

test('sum works', () => {
  expect(sum(1, 2)).toBe(3)
})