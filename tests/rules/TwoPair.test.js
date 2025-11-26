import { describe, it, vi, expect } from 'vitest'
import { TwoPairs } from '../../src/js/rules/TwoPairs.js'

describe('TwoPairs', () => {
  const sut = new TwoPairs()
  
  it('valueOf should return 5', () => {
    expect(Number(sut)).toBe(5)
  })

  it('toString should return "Two Pair"', () => {
    expect(String(sut)).toBe('Two Pair')
  })

  describe('TwoPairs.test()', () => {
    const parameters = [
      { 
        ranks: ['2', '2', '3', '3'],
        ranksObservations: { '2': 2, '3': 2 }, expectedResult: true
      },
      { ranks: ['2', '3', '3', '3'], 
        ranksObservations: { '2': 1, '3': 3 },
        expectedResult: false 
      }
    ]

    parameters.forEach(({ ranks, ranksObservations, expectedResult }) => {
      it(`should return ${expectedResult} for ranks ${ranks}`, () => {
        const gridLineStub = vi.fn({
          getRanks: vi.fn().mockReturnValue(ranksObservations),
        })
        const actual = sut.test(gridLineStub)

        expect(actual).toBe(expectedResult)
      })
    })
  })
})