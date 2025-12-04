import { describe, it, expect } from 'vitest'
import { StraightFlush } from '../../src/js/rules/StraightFlush.js'

describe('StraightFlush', () => {
  it('toObject should return {name: "Straight Flush", points: 75 }', () => {
    const sut = new StraightFlush()
    const expected = {
      name: 'Straight Flush',
      points: 75
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('StraightFlush.test() should return false if Straight.test returns false', () => {
    const straightMock = {
      /**
       * Mock method for test.
       *
       * @returns {boolean} - always returns false
       */
      test: () => false
    }

    const sut = new StraightFlush(straightMock)

    expect(sut.test()).toBe(false)
  })
})
