import { describe, it, vi, expect, afterEach, beforeEach } from 'vitest'
import { StraightFlush } from '../../src/js/rules/StraightFlush.js'


describe('Straight Flush', () => {
  const sut = new StraightFlush()

  it('valueOf should return 75', () => {
    expect(Number(sut)).toBe(75)
  })

  it('toString should return "Straight Flush"', () => {
    expect(String(sut)).toBe('Straight Flush')
  })

  describe('StraightFlush.test()', () => {
    let gridLineStub

    beforeEach(() => {
      gridLineStub = vi.fn({
        hasEmptySlots: vi.fn(),
        getDistinctValues: vi.fn(),
        isSameSuite: vi.fn(),
      })
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    const parameters = [
      {
        cards: '[Q♣, 10♣, J♣, 8♣, 9♣]',
        emptySlots: false,
        isSameSuite: true,
        distinctValues: [8, 9, 10, 11, 12],
        expectedResult: true
      },
      {
        cards: '[Q♣, 10♣, J♣, 8♥, 9♣]',
        emptySlots: false,
        isSameSuite: false,
        distinctValues: [8, 9, 10, 11, 12],
        expectedResult: false
      },
      {
        cards: '[Q♣, 10♣, J♣, 8♣, undefined]',
        emptySlots: true,
        isSameSuite: true,
        distinctValues: [8, 10, 11, 12],
        expectedResult: false
      },
      {
        cards: '[Q♣, 10♣, J♣, 9♣, undefined]',
        emptySlots: true,
        isSameSuite: true,
        distinctValues: [9, 10, 11, 12],
        expectedResult: false
      }
    ]

    parameters.forEach(({ cards, emptySlots, isSameSuite, distinctValues, expectedResult }) => {
      it(`Should return ${expectedResult} for line with cards: ${cards}`, () => {
        gridLineStub.hasEmptySlots.mockReturnValue(emptySlots)
        gridLineStub.isSameSuite.mockReturnValue(isSameSuite)
        gridLineStub.getDistinctValues.mockReturnValue(distinctValues)

        const actual = sut.test(gridLineStub)
        expect(actual).toBe(expectedResult)
      })
    })
  })
})