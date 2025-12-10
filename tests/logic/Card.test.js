import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'

describe('Card', () => {
  it('Card should be instantiated with correct rank', () => {
    const sut = new Card('A', 'Diamonds')

    expect(sut.rank).toBe('A')
  })

  it('Card should be instantiated with correct suite', () => {
    const sut = new Card('A', 'Diamonds')

    expect(sut.suite).toBe('Diamonds')
  })

  it(`constructor should throw if rank is missing`, () => {
    expect(() => new Card(undefined, 'Hearts')).toThrow()
  })

  it(`constructor should throw if suite is missing`, () => {
    expect(() => new Card('A')).toThrow()
  })

  it(`constructor should throw if rank is not valid, valid ranks are 2-10, J, Q, K, A`, () => {
    expect(() => new Card('1', 'Hearts')).toThrow()
  })

  it(`constructor should throw if suite is not valid, valid ranks are Hearts, Spades, Diamonds, Clubs`, () => {
    expect(() => new Card('2', 'earts')).toThrow()
  })
})
