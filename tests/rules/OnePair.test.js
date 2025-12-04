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

  it ('OnePair should inherit test method from SameOfAKind', () => {
    expect(OnePair.prototype.test).toBe(SameOfAKind.prototype.test)
  })
})
