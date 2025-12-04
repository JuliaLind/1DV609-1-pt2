import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'

describe('Card', () => {
  it('toObject should return {rank: "Q", suite: "Spades" }', () => {
    const sut = new Card('Q', 'Spades')
    const expected = {
      rank: 'Q',
      suite: 'Spades'
    }

    expect(sut.toObject()).toEqual(expected)
  })

  const invalidRanks = [undefined, 'B', 1]

  invalidRanks.forEach((invalidRank) => {
    it(`constructor should throw for invalid rank: ${invalidRank}`, () => {
      expect(() => new Card(invalidRank, 'Hearts')).toThrow()
    })
  })

  const invalidSuites = [undefined, 2, '', 'invalidSuite']

  invalidSuites.forEach((invalidSuite) => {
    it(`constructor should throw for invalid suite: ${invalidSuite}`, () => {
      expect(() => new Card('A', invalidSuite)).toThrow()
    })
  })

  it('getter for rank should return correct rank', () => {
    const sut = new Card('7', 'Clubs')
    expect(sut.rank).toBe('7')
  })

  it('getter for suite should return correct suite', () => {
    const sut = new Card('10', 'Diamonds')
    expect(sut.suite).toBe('Diamonds')
  })

  it('valueOf should return correct numeric value for rank', () => {
    const sut = new Card('K', 'Hearts')

    expect(Number(sut)).toBe(13)
  })

  it('toString should return correct string representation of the card', () => {
    const sut = new Card('K', 'Hearts')

    expect(String(sut)).toBe('K of Hearts')
  })
})
