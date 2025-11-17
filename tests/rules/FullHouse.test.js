import { describe, it, expect } from 'vitest'
import { FullHouse } from '../../src/rules/FullHouse.js'

describe('FullHouse', () => {
  const sut = new FullHouse()

  it('getValue() should return 25', () => {
    expect(sut.getValue()).toBe(25)
  })

  it('toString() should return "Full House"', () => {
    expect(sut.toString()).toBe('Full House')
  })

  describe('test()', () => {
    it('should return false for ranks [2, 3, 2, 3]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 2, '3': 2 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(false)
    })

    it('should return false for ranks [3, 2, 3, 3, 3]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 1, '3': 4 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(false)
    })

    it('should return true for ranks [3, 2, 2, 3, 3]', () => {
      const cardCollection = {
        getRanks: () => ({ '2': 2, '3': 3 })
      }
      const actual = sut.test(cardCollection)

      expect(actual).toBe(true)
    })
  })
})