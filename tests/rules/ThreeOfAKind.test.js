import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/rules/ThreeOfAKind.js'
import { getAttributeMock } from './lib.js'


describe('OnePair', () => {
  const sut = new ThreeOfAKind()
  it('getValue should return 10', () => {
    expect(sut.getValue()).toBe(10)
  })

  it('toString should return "Three of a Kind"', () => {
    expect(sut.toString()).toBe('Three of a Kind')
  })

  describe('test method', () => {
    it('test should return false for a hand with two cards of same rank', () => {
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

      expect(sut.test([card1, card2, card3, card4])).toBe(false)
    })

    it('test should return true for a hand with three cards of same rank', () => {
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


      expect(sut.test([card1, card2, card3, card4])).toBe(true)
    })
  })
})