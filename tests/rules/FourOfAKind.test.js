import { describe, it, vi, expect } from 'vitest'
import { FourOfAKind } from '../../src/js/rules/FourOfAKind.js'

describe('FourOfAKind', () => {
  const sut = new FourOfAKind()

  it('valueOf() should return 50', () => {
    expect(Number(sut)).toBe(50)
  })

  it('toString() should return "Four of a Kind"', () => {
    expect(String(sut)).toBe('Four of a Kind')
  })


  describe('FourOfAKind.test()', () => {
    const parameters = [
      {
        ranks: [2, 3, 2, 3, 3],
        ranksObservations: { '2': 2, '3': 3 },
        expectedResult: false
      },
      {
        ranks: [3, 2, 3, 3, 3],
        ranksObservations: { '2': 1, '3': 4 },
        expectedResult: true
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