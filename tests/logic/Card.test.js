import { describe, it, expect } from 'vitest'
import { Card } from '../../src/js/logic/Card.js'


describe('Card', () => {
  it('Cannot set invalid suite', async () => {
    expect(() => new Card('invalid', 'A')).toThrow()
  })

  it('Cannot set invalid rank', async () => {
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
})