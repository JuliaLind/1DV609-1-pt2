import { describe, it, expect } from 'vitest'
import { TwoPairs } from '../../src/js/rules/TwoPairs.js'

describe('TwoPairs', () => {
  it('toObject should return {name: "Two Pairs", points: 5 }', () => {
    const sut = new TwoPairs()
    const expected = {
      name: 'Two Pairs',
      points: 5
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('TwoPairs.test() should return true for line that has two twos and two threes', () => {
    const sut = new TwoPairs()
    const lineStub = {
      /**
       * Stub method for getRankFrequencies.
       *
       * @returns {object} - a stubbed rank frequencies object that says there are two pairs
       */
      getRankFrequencies: () => ({
        2: 2,
        3: 2
      })
    }

    expect(sut.test(lineStub)).toBe(true)
  })
})
