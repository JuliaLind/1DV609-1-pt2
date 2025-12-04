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

  it('RoyalFlush.test should return false if StraightFlush.test returns true but line does not contain an Ace', () => {
    const straightFlushMock = {
      /**
       * Stub method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const sut = new RoyalFlush(straightFlushMock)
    const lineStub = {
      /**
       * Stub method for hasRank.
       * Returns false for rank 14 (Ace).
       *
       * @param {number} rank - the rank to check
       * @returns {boolean} - true if the line contains the specified rank, false otherwise
       */
      hasRank: (rank) => rank !== 14
    }

    expect(sut.test(lineStub)).toBe(false)
  })
})
