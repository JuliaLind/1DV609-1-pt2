import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/rules/OnePair.js'


describe('OnePair', () => {
  const sut = new OnePair()
  it('getValue should return 2', () => {
    expect(sut.getValue()).toBe(2)
  })

  it('toString should return "One Pair"', () => {
    expect(sut.toString()).toBe('One Pair')
  })

  describe('test method', () => {
    /**
     * Mocks the get attribute implementation for a poker card.
     * If attribute name is 'rank', it returns the provided value.
     *
     * @param {string} value - the rank value to return
     * @returns the rank value
     */
    function getAttributeMock(value) {
      return (name) => {
        if (name === 'rank') {
          return value
        }

        throw new Error(`Unexpected attribute requested: ${name}`)
      }
    }

    it('test should return true for a hand with one pair', () => {
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

    it('test should return false for a hand with no pairs', () => {
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