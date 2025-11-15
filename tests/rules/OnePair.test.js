import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/rules/OnePair.js'
import { getAttributeMock } from './lib.js'


describe('OnePair', () => {
  const sut = new OnePair()
  it('getValue should return 2', () => {
    expect(sut.getValue()).toBe(2)
  })

  it('toString should return "One Pair"', () => {
    expect(sut.toString()).toBe('One Pair')
  })

  describe('test method', () => {
    it('test should return true for ranks [2, 3, 2]', () => {
      const card1 = {
        getAttribute: getAttributeMock('2')
      }

      const card2 = {
        getAttribute: getAttributeMock('3')
      }

      const card3 = {
        getAttribute: getAttributeMock('2')
      }

      expect(sut.test([card1, card2, card3])).toBe(true)
    })

    it('test should return false for ranks [2, 3, A]', () => {
      const card1 = {
        getAttribute: getAttributeMock('2')
      }

      const card2 = {
        getAttribute: getAttributeMock('3')
      }

      const card3 = {
        getAttribute: getAttributeMock('A')
      }

      expect(sut.test([card1, card2, card3])).toBe(false)
    })
  })
})