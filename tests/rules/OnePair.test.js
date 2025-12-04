import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/js/rules/OnePair.js'

describe('OnePair', () => {
  it('toObject should return {name: "One Pair", points: 2 }', () => {
    const sut = new OnePair()
    const expected = {
      name: 'One Pair',
      points: 2
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('Test should return true for line with at least one pair', () => {
    const sut = new OnePair()
    const line = {
      getRankFrequencies: () => ({
        9: 2
      })
    }
    expect(sut.test(line)).toBe(true)
  })
})
