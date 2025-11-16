import { describe, it, expect } from 'vitest'
import { TwoPair } from '../../src/rules/TwoPair.js'
import { getAttributeMock } from '../lib/helpers.js'


describe('OnePair', () => {
  const sut = new TwoPair()
  it('getValue should return 5', () => {
    expect(sut.getValue()).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(sut.toString()).toBe('Two Pair')
  })

  describe('test()', () => {
    const twoHearts = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '2' })
    })

    const twoSpades = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '2' })
    })

    const threeHearts = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '3' })
    })

    const threeSpades = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '3' })
    })

    const threeClubs = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '3' })
    })

    it('should return true for ranks [2, 3, 2, 3]', () => {
      const actual = sut.test([twoHearts, threeClubs, undefined, twoSpades, threeSpades])

      expect(actual).toBe(true)
    })

    it('should return false for ranks [2, 3, 3, 3]', () => {
      const actual = sut.test([twoHearts, threeHearts, threeSpades, threeClubs, undefined])

      expect(actual).toBe(false)
    })
  })
})