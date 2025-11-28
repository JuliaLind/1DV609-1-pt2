import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'


describe('Card', () => {
  it('Constructor - should throw error for invalid suite', async () => {
    expect(() => new Card('invalid', 'A')).toThrow()
  })

  it('Constructor - should throw error for invalid rank', async () => {
    expect(() => new Card('hearts', '1')).toThrow()
  })

  describe('valueOf() boundary values', () => {
    const parameters = [
      { rank: '2', expectedValue: 2 },
      { rank: 'J', expectedValue: 11 },
    ]

    parameters.forEach(({ rank, expectedValue }) => {
      it(`Value of card with rank '${rank}' should be ${expectedValue}`, async () => {
        const sut = new Card('hearts', rank)
        expect(Number(sut)).toBe(expectedValue)
      })
    })
  })

  it('getRank() for K spades should return K', () => {
    const sut = new Card('spades', 'K')
    expect(sut.getRank()).toBe('K')
  })

  it('getSuite() for 5 diamonds should return diamonds', () => {
    const sut = new Card('diamonds', '5')
    expect(sut.getSuite()).toBe('diamonds')
  })
})