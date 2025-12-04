import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/js/rules/ThreeOfAKind.js'

describe('ThreeOfAKind', () => {
  it('toObject should return {name: "Three of a Kind", points: 2 }', () => {
    const sut = new ThreeOfAKind()
    const expected = {
      name: 'One Pair',
      points: 10
    }

    expect(sut.toObject()).toEqual(expected)
  })

})
