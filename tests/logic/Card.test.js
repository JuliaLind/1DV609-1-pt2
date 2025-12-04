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

  it('getter for rank should return correct rank', () => {
    const sut = new Card('7', 'clubs')
    expect(sut.rank).toBe('7')
  })

  it('getter for suite should return correct suite', () => {
    const sut = new Card('10', 'diamonds')
    expect(sut.suite).toBe('diamonds')
  })

  it('valueOf should return correct numeric value for rank', () => {
    const sut = new Card('K', 'hearts')

    expect(Number(sut)).toBe(13)
  })
})
