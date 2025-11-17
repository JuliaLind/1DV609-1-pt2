import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/rules/OnePair.js'

describe('OnePair', () => {
  const sut = new OnePair()

  it('getValue should return 2', () => {
    expect(sut.getValue()).toBe(2)
  })

  it('toString should return "One Pair"', () => {
    expect(sut.toString()).toBe('One Pair')
  })

  describe('test()', () => {
    it('should return true for ranks [2, 3, 2]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 2, '3': 1 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(true)
    })

    it('should return false for ranks [2, 3, A]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 1, '3': 1, 'A': 1 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(false)
    })
  })
})