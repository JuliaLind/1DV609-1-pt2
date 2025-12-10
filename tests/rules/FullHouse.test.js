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

  it('FullHouse.test() should return true if both ThreeOfAKind.test and OnePair.test return true', () => {
    const onePairStub = {
      /**
       * Stub method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const threeOfAKindStub = {
      /**
       * Stub method for test.
       *
       * @returns {boolean} - always returns true
       */
      test: () => true
    }

    const sut = new FullHouse(onePairStub, threeOfAKindStub)

    const lineStub = {}

    expect(sut.test(lineStub)).toBe(true)
  })
})
