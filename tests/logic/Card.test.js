import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'

describe('Card', () => {
  it('toObject should return {rank: "Q", suite: "spades" }', () => {
    const sut = new Card('Q', 'spades')
    const expected = {
      rank: 'Q',
      suite: 'spades'
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
