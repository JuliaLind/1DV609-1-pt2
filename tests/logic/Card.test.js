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
})
