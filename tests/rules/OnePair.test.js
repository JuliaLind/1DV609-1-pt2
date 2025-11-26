import { describe, it, vi, expect } from 'vitest'
import { OnePair } from '../../src/js/rules/OnePair.js'

describe('OnePair', () => {
  const sut = new OnePair()

  it('valueOf should return 2', () => {
    expect(Number(sut)).toBe(2)
  })

  it('toString should return "One Pair"', () => {
    expect(String(sut)).toBe('One Pair')
  })

  describe('OnePair.test()', () => {
    const parameters = [
      { 
        ranks: ['2', '3', '2'],
        ranksObservations: { '2': 2, '3': 1 },
        expectedResult: true
      },
      { 
        ranks: ['2', '3', 'A'],
        ranksObservations: { '2': 1, '3': 1, 'A': 1 },
        expectedResult: false
      }
    ]

    parameters.forEach(({ ranks, ranksObservations, expectedResult }) => {
      it(`should return ${expectedResult} for ranks ${ranks}`, () => {
        const gridLineStub = vi.fn(
          {
            getRanks: vi.fn().mockReturnValue(ranksObservations),
          }
        )
        const actual = sut.test(gridLineStub)

        expect(actual).toBe(expectedResult)
      })
    })
  })
})
