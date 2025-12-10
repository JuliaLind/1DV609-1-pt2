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

  it('StraightFlush.test() should return true if both Straight.test and Flush.test return true', () => {
    const straightMock = {
      /**
       * Mock method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const flushMock = {
      /**
       * Mock method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const sut = new StraightFlush(straightMock, flushMock)

    expect(sut.test()).toBe(true)
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

  it('StraightFlush.test() should return false if Flush.test returns false', () => {
    const straightMock = {
      /**
       * Mock method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const flushMock = {
      /**
       * Mock method for test.
       *
       * @returns {boolean} - always returns false
       */
      test: () => false
    }

    const sut = new StraightFlush(straightMock, flushMock)

    expect(sut.test()).toBe(false)
  })

})
