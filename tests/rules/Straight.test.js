import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Straight } from '../../src/js/rules/Straight.js'

describe('Straight', () => {
  const sut = new Straight()

  it('valueOf should return 15', () => {
    expect(Number(sut)).toBe(15)
  })

  it('toString should return "Straight"', () => {
    expect(String(sut)).toBe('Straight')
  })

  describe('Straight.test()', () => {
    let gridLineStub

    afterEach(() => {
      vi.clearAllMocks()
    })

    const parameters = [
      {
        ranks: '[Q, 10, J, 8, 9]',
        emptySlots: false,
        distinctValues: [8, 9, 10, 11, 12],
        rankFrequencies: { '8': 1, '9': 1, '10': 1, 'J': 1, 'Q': 1 },
        expectedResult: true
      },
      {
        ranks: '[3, 10, J, 8, 9]',
        emptySlots: false,
        distinctValues: [3, 8, 9, 10, 11],
        rankFrequencies: { '3': 1, '8': 1, '9': 1, '10': 1, 'J': 1 },
        expectedResult: false
      },
      {
        ranks: '[Q, 10, J, 9]',
        emptySlots: true,
        distinctValues: [9, 10, 11, 12],
        rankFrequencies: { '9': 1, '10': 1, 'J': 1, 'Q': 1 },
        expectedResult: false
      },
      {
        ranks: '[Q, 10, 8, J, 8]',
        emptySlots: false,
        distinctValues: [8, 10, 11, 12],
        rankFrequencies: { '8': 2, '10': 1, 'J': 1, 'Q': 1 },
        expectedResult: false
      }
    ]

    parameters.forEach(({ ranks, emptySlots, distinctValues, rankFrequencies, expectedResult }) => {
      it(`Should return ${expectedResult} for line with ranks: ${ranks}`, () => {
        gridLineStub = vi.fn({
          hasEmptySlots: vi.fn().mockReturnValue(emptySlots),
          getDistinctValues: vi.fn().mockReturnValue(distinctValues),
          getRankFrequencies: vi.fn().mockReturnValue(rankFrequencies)
        })

        const actual = sut.test(gridLineStub)

        expect(actual).toBe(expectedResult)
        })
      })
    })
  })