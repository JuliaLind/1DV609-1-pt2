import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/rules/ThreeOfAKind.js'


describe('ThreeOfAKind', () => {
  const sut = new ThreeOfAKind()

  it('getValue() should return 10', () => {
    expect(sut.getValue()).toBe(10)
  })

  it('toString() should return "Three of a Kind"', () => {
    expect(sut.toString()).toBe('Three of a Kind')
  })

  describe('test()', () => {
    it('should return false for ranks [2, 3, 2, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 2, '3': 2 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(false)
    })

    it('should return true for ranks [2, 3, 3, 3]', () => {
      const gridLineStub = {
        getRanks: () => ({ '2': 1, '3': 3 })
      }
      const actual = sut.test(gridLineStub)

      expect(actual).toBe(true)
    })
  })
})