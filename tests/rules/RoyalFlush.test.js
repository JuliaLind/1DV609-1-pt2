import { describe, it, expect } from 'vitest'
import { RoyalFlush } from '../../src/rules/RoyalFlush.js'
import { getAttributeMock } from './lib/helpers.js'

describe('Royal Flush', () => {
  const sut = new RoyalFlush()

  it('getValue should return 100', () => {
    expect(sut.getValue()).toBe(100)
  })

  it('toString should return "Royal Flush"', () => {
    expect(sut.toString()).toBe('Royal Flush')
  })

  describe('test()', () => {
    const eightClubs = Object.freeze({
      getValue: () => 8,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const nineClubs= Object.freeze({
      getValue: () => 9,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const tenClubs = Object.freeze({
      getValue: () => 10,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const jackClubs = Object.freeze({
      getValue: () => 11,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const queenClubs = Object.freeze({
      getValue: () => 12,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const queenHearts = Object.freeze({
      getValue: () => 12,
      getAttribute: getAttributeMock({ 'suit': 'hearts' }),
    })

    const kingClubs = Object.freeze({
      getValue: () => 13,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const aceClubs = Object.freeze({
      getValue: () => 14,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    it ('should return true for cards [A♣, 10♣, K♣, J♣, Q♣]', () => {
      const actual = sut.test([aceClubs, tenClubs, kingClubs, jackClubs, queenClubs])
      expect(actual).toBe(true)
    })

    it ('should return false for cards [A♣, 10♣, K♣, J♣, Q♥]', () => {
      const actual = sut.test([aceClubs, tenClubs, kingClubs, jackClubs, queenHearts])
      expect(actual).toBe(false)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 8♣, 9♣]', () => {
      const actual = sut.test([queenClubs, tenClubs, jackClubs, eightClubs, nineClubs])
      expect(actual).toBe(false)
    })

    it ('should return false for cards [A♣, 10♣]', () => {
      const actual = sut.test([aceClubs, tenClubs, undefined, undefined, undefined])
      expect(actual).toBe(false)
    })

      it ('should return false for cards [A♣, K♣]', () => {
      const actual = sut.test([aceClubs, undefined, kingClubs, undefined, undefined])
      expect(actual).toBe(false)
    })
  })
})