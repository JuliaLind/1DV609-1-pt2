import { describe, it, expect } from 'vitest'
import { FullHouse } from '../../src/js/rules/FullHouse.js'

describe('FullHouse', () => {
  it('toObject should return {name: "Full House", points: 25 }', () => {
    const sut = new FullHouse()
    const expected = {
      name: 'Full House',
      points: 25
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('FullHouse.test() should return true for line with two fives and three sixes', () => {
    const sut = new FullHouse()
    const lineStub = {
      /**
       * Stub method for getRankFrequencies.
       *
       * @returns {object} - a stubbed rank frequencies object that says there are two fives and three sixes
       */
      getRankFrequencies: () => ({
        5: 2,
        6: 3
      })
    }

    expect(sut.test(lineStub)).toBe(true)
  })

  it('FullHouse.test() should return true for line with three sixes and one five', () => {
    const sut = new FullHouse()
    const lineStub = {
      /**
       * Stub method for getRankFrequencies.
       *
       * @returns {object} - a stubbed rank frequencies object that says there are two fives and one sixes
       */
      getRankFrequencies: () => ({
        5: 2,
        6: 1
      })
    }

    expect(sut.test(lineStub)).toBe(false)
  })
})
