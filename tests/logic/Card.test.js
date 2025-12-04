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

  const invalidRanks = [undefined, 'B', 1]

  invalidRanks.forEach((invalidRank) => {
    it(`constructor should throw for invalid rank: ${invalidRank}`, () => {
      expect(() => new Card(invalidRank, 'hearts')).toThrow()
    })
  })

  const invalidSuites = [undefined, 2, '', 'invalidSuite']

  invalidSuites.forEach((invalidSuite) => {
    it(`constructor should throw for invalid suite: ${invalidSuite}`, () => {
      expect(() => new Card('A', invalidSuite)).toThrow()
    })
  })
})
