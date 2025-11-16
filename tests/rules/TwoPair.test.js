import { describe, it, expect } from 'vitest'
import { TwoPair } from '../../src/rules/TwoPair.js'
import { getAttributeMock } from './lib/helpers.js'


describe('OnePair', () => {
  const sut = new TwoPair()
  it('getValue should return 5', () => {
    expect(sut.getValue()).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(sut.toString()).toBe('Two Pair')
  })

  describe('test method', () => {
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

    it('test should return true for ranks [2, 3, 2, 3]', () => {
      const actual = sut.test([twoHearts, threeClubs, twoSpades, threeSpades])

      expect(actual).toBe(true)
    })

    it('test should return false for ranks [2, 3, 3, 3]', () => {
      const actual = sut.test([twoHearts, threeHearts, threeSpades, threeClubs])

      expect(actual).toBe(false)
    })
  })
})