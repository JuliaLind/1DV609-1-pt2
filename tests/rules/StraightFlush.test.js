import { describe, it, expect } from 'vitest'
import { StraightFlush } from '../../src/rules/StraightFlush.js'
import { getAttributeMock } from '../lib/helpers.js'

describe('Straight Flush', () => {
  const sut = new StraightFlush()

  it('getValue should return 75', () => {
    expect(sut.getValue()).toBe(75)
  })

  it('toString should return "Straight Flush"', () => {
    expect(sut.toString()).toBe('Straight Flush')
  })

  describe('test()', () => {
    const eightClubs = Object.freeze({
      getValue: () => 8,
      getAttribute: getAttributeMock({ 'suit': 'clubs' }),
    })

    const eightHearts = Object.freeze({
      getValue: () => 8,
      getAttribute: getAttributeMock({ 'suit': 'hearts' }),
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

    it('should return true for cards [Q♣, 10♣, J♣, 8♣, 9♣]', () => {
      const actual = sut.test([queenClubs, tenClubs, jackClubs, eightClubs, nineClubs])
      expect(actual).toBe(true)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 8♥, 9♣]', () => {
      const actual = sut.test([queenClubs, tenClubs, jackClubs, eightHearts, nineClubs])
      expect(actual).toBe(false)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 8♣, undefined]', () => {
      const actual = sut.test([queenClubs, tenClubs, jackClubs, eightClubs, undefined])
      expect(actual).toBe(false)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 9♣, undefined]', () => {
      const actual = sut.test([queenClubs, tenClubs, jackClubs, nineClubs, undefined])
      expect(actual).toBe(false)
    })
  })
})