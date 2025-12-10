import { describe, it, expect } from 'vitest'
import { Straight } from '../../src/js/rules/Straight.js'

describe('Straight', () => {
  it('toObject should return {name: "Straight", points: 15 }', () => {
    const sut = new Straight()
    const expected = {
      name: 'Straight',
      points: 15
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('Straight.test() should return true for line with 5 unique consecutive ranks', () => {
    const sut = new Straight()
    const lineStub = {
      /**
       * Stub method for getRankFrequencies.
       *
       * @returns {object} - a stubbed rank frequencies object that contains five consecutive ranks
       */
      getRankFrequencies: () => {
        return {
          10: 1,
          11: 1,
          8: 1,
          9: 1,
          12: 1
        }
      }
    }

    expect(sut.test(lineStub)).toBe(true)
  })
})
