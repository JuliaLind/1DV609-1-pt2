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
})
