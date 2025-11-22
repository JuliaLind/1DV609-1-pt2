import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'


describe('Card', () => {
  it('Cannot set invalid suite', async () => {
    expect(() => new Card('invalid', 'A')).toThrow()
  })

  it('Cannot set invalid rank', async () => {
    expect(() => new Card('hearts', '23')).toThrow()
  })

  it('Value of card with rank \'10\' should be 10', async () => {
    const sut = new Card('hearts', '10')

    expect(Number(sut)).toBe(10)
  })

  it('Value of card with rank \'A\' should be 14', async () => {
    const sut = new Card('spades', 'A')

    expect(Number(sut)).toBe(14)
  })
})