import { describe, it, expect } from 'vitest'
import { FourOfAKind } from '../../src/rules/FourOfAKind.js'

describe('FourOfAKind', () => {
  const sut = new FourOfAKind()

  it('valueOf() should return 50', () => {
    expect(sut.valueOf()).toBe(50)
  })

  it('toString() should return "Four of a Kind"', () => {
    expect(sut.toString()).toBe('Four of a Kind')
  })

  describe('test()', () => {
    it('should return false for ranks [2, 3, 3, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 2, '3': 3 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(false)
    })

    it('should return true for ranks [3, 2, 3, 3, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 1, '3': 4 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(true)
    })
  })
})