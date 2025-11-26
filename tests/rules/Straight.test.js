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

    beforeEach(() => {
      gridLineStub = vi.fn({
        hasEmptySlots: vi.fn(),
        getDistinctValues: vi.fn(),
      })
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    const parameters = [
      {
        ranks: '[Q, 10, J, 8, 9]',
        emptySlots: false,
        distinctValues: [8, 9, 10, 11, 12],
        expectedResult: true
      },
      {
        ranks: '[3, 10, J, 8, 9]',
        emptySlots: false,
        distinctValues: [3, 8, 9, 10, 11],
        expectedResult: false
      },
      {
        ranks: '[Q, 10, J, 9]',
        emptySlots: true,
        distinctValues: [9, 10, 11, 12],
        expectedResult: false
      },
      {
        ranks: '[Q, 10, 8, J, 8]',
        emptySlots: false,
        distinctValues: [8, 10, 11, 12],
        expectedResult: false
      }
    ]

    parameters.forEach(({ ranks, emptySlots, distinctValues, expectedResult }) => {
      it(`Should return ${expectedResult} for line with ranks: ${ranks}`, () => {
        gridLineStub.hasEmptySlots.mockReturnValue(emptySlots)
        gridLineStub.getDistinctValues.mockReturnValue(distinctValues)

        const actual = sut.test(gridLineStub)
        expect(actual).toBe(expectedResult)
      })
    })
  })
})