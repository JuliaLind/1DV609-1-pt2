import { describe, it, expect } from 'vitest'
import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'

describe('Royal Flush', () => {
  const sut = new RoyalFlush()

  it('valueOf should return 100', () => {
    expect(sut.valueOf()).toBe(100)
  })

  it('toString should return "Royal Flush"', () => {
    expect(sut.toString()).toBe('Royal Flush')
  })

  describe('test()', () => {
    it ('should return true for cards [A♣, 10♣, K♣, J♣, Q♣]', () => {
      const gridLineStub = {
        isSameSuite: () => true,
        getDistinctValues: () => [10, 11, 12, 13, 14],
        hasEmptySlots: () => false,
        hasRank: (rank) => ['10', 'J', 'Q', 'K', 'A'].includes(rank),
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(true)
    })

    it ('should return false for cards [A♣, 10♣, K♣, J♣, Q♥]', () => {
      const gridLineStub = {
        isSameSuite: () => false,
        getDistinctValues: () => [10, 11, 12, 13, 14],
        hasEmptySlots: () => false,
        hasRank: (rank) => ['10', 'J', 'Q', 'K', 'A'].includes(rank),
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

    it('should return false for cards [10♣, K♣, J♣, Q♣, 9♣]', () => {
      const gridLineStub = {
        isSameSuite: () => true,
        getDistinctValues: () => [9, 10, 11, 12, 13],
        hasEmptySlots: () => false,
        hasRank: (rank) => ['9','10', 'J', 'Q', 'K'].includes(rank),
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

    it ('should return false for cards [A♣, 10♣]', () => {
      const gridLineStub = {
        isSameSuite: () => true,
        getDistinctValues: () => [10, 14],
        hasEmptySlots: () => true,
        hasRank: (rank) => ['10','A'].includes(rank)
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

      it ('should return false for cards [A♣, K♣]', () => {
      const gridLineStub = {
        isSameSuite: () => true,
        getDistinctValues: () => [13, 14],
        hasEmptySlots: () => true,
        hasRank: (rank) => ['K','A'].includes(rank)
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })
  })
})