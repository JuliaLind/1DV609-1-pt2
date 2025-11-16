import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/rules/ThreeOfAKind.js'
import { getAttributeMock } from './lib/helpers.js'


describe('ThreeOfAKind', () => {
  const sut = new ThreeOfAKind()

  it('getValue() should return 10', () => {
    expect(sut.getValue()).toBe(10)
  })

  it('toString() should return "Three of a Kind"', () => {
    expect(sut.toString()).toBe('Three of a Kind')
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

    it('should return false for ranks [2, 3, 2, 3]', () => {
      const actual = sut.test([twoHearts, threeHearts, twoSpades, threeSpades])

      expect(actual).toBe(false)
    })

    it('should return true for ranks [2, 3, 3, 3]', () => {
      const actual = sut.test([twoHearts, threeHearts, threeSpades, threeClubs])

      expect(actual).toBe(true)
    })
  })
})