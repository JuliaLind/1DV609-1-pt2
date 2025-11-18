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
      const gridLineStub = {
        hasEmptySlots: () => false,
        isSameSuite: () => true,
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(true)
    })

    it('should return false for different suite cards', () => {
      const gridLineStub = {
        hasEmptySlots: () => false,
        isSameSuite: () => false,
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

    it('should return false for cards with empty slots', () => {
      const gridLineStub = {
        hasEmptySlots: () => true,
        isSameSuite: () => true,
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })
  })
})