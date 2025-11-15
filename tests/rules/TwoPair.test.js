import { describe, it, expect } from 'vitest'
import { TwoPair } from '../../src/rules/TwoPair.js'
import { getAttributeMock } from './lib.js'


describe('OnePair', () => {
  const sut = new TwoPair()
  it('getValue should return 5', () => {
    expect(sut.getValue()).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(sut.toString()).toBe('Two Pair')
  })

  describe('test method', () => {
    it('test should return true for a hand with two pairs', () => {
      const card1 = {
        getAttribute: getAttributeMock('2')
      }

      const card2 = {
        getAttribute: getAttributeMock('3')
      }

      const card3 = {
        getAttribute: getAttributeMock('2')
      }

      const card4 = {
        getAttribute: getAttributeMock('3')
      }

      expect(sut.test([card1, card2, card3, card4])).toBe(true)
    })

    it('test should return false for a hand with three of same rank', () => {
      const card1 = {
        getAttribute: getAttributeMock('2')
      }

      const card2 = {
        getAttribute: getAttributeMock('3')
      }

      const card3 = {
        getAttribute: getAttributeMock('3')
      }

      const card4 = {
        getAttribute: getAttributeMock('3')
      }


      expect(sut.test([card1, card2, card3, card4])).toBe(false)
    })
  })
})