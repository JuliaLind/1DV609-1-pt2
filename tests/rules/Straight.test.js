import { describe, it, expect } from 'vitest'
import { Straight } from '../../src/rules/Straight.js'

describe('Straight', () => {
  const sut = new Straight()

  it('valueOf should return 15', () => {
    expect(sut.valueOf()).toBe(15)
  })

  it('toString should return "Straight"', () => {
    expect(sut.toString()).toBe('Straight')
  })

  describe('test()', () => {
    it('should return true for ranks [Q, 10, J, 8, 9]', () => {
      const gridLineStub = {
        hasEmptySlots: () => false,
        getDistinctValues: () => [8, 9, 10, 11, 12],
      }

      const actual = sut.test(gridLineStub)

      expect(actual).toBe(true)
    })

    it('should return false for ranks [3, 10, J, 8, 9]', () => {
      const gridLineStub = {
        hasEmptySlots: () => false,
        getDistinctValues: () => [3, 8, 9, 10, 11],
      }

      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

    it('should return false for ranks [Q, 10, J, 9]', () => {
      const gridLineStub = {
        hasEmptySlots: () => true,
        getDistinctValues: () => [9, 10, 11, 12],
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })

    it('should return false for ranks [Q, 10, 8, J, 8]', () => {
      const gridLineStub = {
        hasEmptySlots: () => false,
        getDistinctValues: () => [8, 10, 11, 12],
      }
      const actual = sut.test(gridLineStub)
      expect(actual).toBe(false)
    })
  })
})