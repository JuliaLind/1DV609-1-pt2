import { describe, it, expect, test } from 'vitest'
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

  it('FullHouse.test() should return false if OnePair.test returns false', () => {
    const onePairStub = {
      test: () => false
    }

    const sut = new FullHouse(onePairStub)

    const lineStub = {}

    expect(sut.test(lineStub)).toBe(false)
  })
})
