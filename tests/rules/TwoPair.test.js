import { describe, it, expect } from 'vitest'
import { TwoPair } from '../../src/rules/TwoPair.js'

describe('OnePair', () => {
  const sut = new TwoPair()
  it('getValue should return 5', () => {
    expect(sut.getValue()).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(sut.toString()).toBe('Two Pair')
  })

  describe('test()', () => {
    it('should return true for ranks [2, 3, 2, 3]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 2, '3': 2 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(true)
    })

    it('should return false for ranks [2, 3, 3, 3]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 1, '3': 3 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(false)
    })
  })
})