import { test, expect } from 'vitest'
import { add } from '.'

test('happy path', () => {
  expect(add(1, 2)).toBe(3)
})
