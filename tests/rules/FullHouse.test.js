import { describe, it, vi, expect } from 'vitest'
import { FullHouse } from '../../src/js/rules/FullHouse.js'

describe('FullHouse', () => {
  const sut = new FullHouse()

  it('valueOf() should return 25', () => {
    expect(Number(sut)).toBe(25)
  })

  it('toString() should return "Full House"', () => {
    expect(String(sut)).toBe('Full House')
  })

  describe('FullHouse.test()', () => {
    const parameters = [
      {
        ranks: ['2', '3', '2', '3'],
        ranksObservations: { '2': 2, '3': 2 },
        expectedResult: false
      },
      {
        ranks: [3, 2, 3, 3, 3],
        ranksObservations: { '2': 1, '3': 4 },
        expectedResult: false
      },
      {
        ranks: [3, 2, 2, 3, 3],
        ranksObservations: { '2': 2, '3': 3 },
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