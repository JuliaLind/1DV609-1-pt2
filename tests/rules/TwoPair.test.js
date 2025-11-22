import { describe, it, expect } from 'vitest'
import { TwoPairs } from '../../src/js/rules/TwoPairs.js'

describe('TwoPairs', () => {
  const sut = new TwoPairs()
  it('valueOf should return 5', () => {
    expect(sut.valueOf()).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(sut.toString()).toBe('Two Pair')
  })

  describe('test()', () => {
    it('should return true for ranks [2, 3, 2, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 2, '3': 2 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(true)
    })

    it('should return false for ranks [2, 3, 3, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 1, '3': 3 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(false)
    })
  })
})