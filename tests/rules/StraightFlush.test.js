import { describe, it, expect } from 'vitest'
import { StraightFlush } from '../../src/rules/StraightFlush.js'


describe('Straight Flush', () => {
  const sut = new StraightFlush()

  it('getValue should return 75', () => {
    expect(sut.getValue()).toBe(75)
  })

  it('toString should return "Straight Flush"', () => {
    expect(sut.toString()).toBe('Straight Flush')
  })

  describe('test()', () => {
    it('should return true for cards [Q♣, 10♣, J♣, 8♣, 9♣]', () => {
      const cardCollection = {
        hasEmptySlots: () => false,
        getDistinctValues: () => [8, 9, 10, 11, 12],
        isSameSuite: () => true,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(true)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 8♥, 9♣]', () => {
      const cardCollection = {
        hasEmptySlots: () => false,
        getDistinctValues: () => [8, 9, 10, 11, 12],
        isSameSuite: () => false,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(false)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 8♣, undefined]', () => {
      const cardCollection = {
        hasEmptySlots: () => true,
        getDistinctValues: () => [8, 10, 11, 12],
        isSameSuite: () => true,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(false)
    })

    it('should return false for cards [Q♣, 10♣, J♣, 9♣, undefined]', () => {
      const cardCollection = {
        hasEmptySlots: () => true,
        getDistinctValues: () => [9, 10, 11, 12],
        isSameSuite: () => true,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(false)
    })
  })
})