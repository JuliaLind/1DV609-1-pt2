import { describe, it, expect } from 'vitest'
import { Flush } from '../../src/rules/Flush.js'

describe('Flush', () => {
  const sut = new Flush()
  it('getValue should return 20', () => {
    expect(sut.getValue()).toBe(20)
  })

  it('toString should return "Flush"', () => {
    expect(sut.toString()).toBe('Flush')
  })

  describe('test()', () => {
    it('should return true for same suite cards', () => {
      const cardCollection = {
        hasEmptySlots: () => false,
        isSameSuite: () => true,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(true)
    })

    it('should return false for different suite cards', () => {
      const cardCollection = {
        hasEmptySlots: () => false,
        isSameSuite: () => false,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(false)
    })

    it('should return false for cards with empty slots', () => {
      const cardCollection = {
        hasEmptySlots: () => true,
        isSameSuite: () => true,
      }
      const actual = sut.test(cardCollection)
      expect(actual).toBe(false)
    })
  })
})