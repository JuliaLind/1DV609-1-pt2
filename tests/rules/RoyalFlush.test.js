import { describe, it, expect } from 'vitest'
import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'

describe('RoyalFlush', () => {
  it('toObject should return {name: "Royal Flush", points: 100 }', () => {
    const sut = new RoyalFlush()
    const expected = {
      name: 'Royal Flush',
      points: 100
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('RoyalFlush.test should return false if StraightFlush.test returns false', () => {
    const straightFlushMock = {
      /**
       * Stub method for test.
       *
       * @returns {boolean} - always returns false
       */
      test: () => false
    }

    const sut = new RoyalFlush(straightFlushMock)
    const lineStub = {}

    expect(sut.test(lineStub)).toBe(false)
  })
})
