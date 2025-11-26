import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'

describe('Royal Flush', () => {
  const sut = new RoyalFlush()

  it('valueOf should return 100', () => {
    expect(Number(sut)).toBe(100)
  })

  it('toString should return "Royal Flush"', () => {
    expect(String(sut)).toBe('Royal Flush')
  })

  describe('RoyalFlush.test()', () => {
    let gridLineStub

    beforeEach(() => {
      gridLineStub = vi.fn({
        hasEmptySlots: vi.fn(),
        getDistinctValues: vi.fn(),
        isSameSuite: vi.fn(),
        hasRank: vi.fn(),
      })
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    const parameters = [
      {
        cards: '[A♣, 10♣, K♣, J♣, Q♣]',
        hasEmptySlots: false,
        distinctValues: [10, 11, 12, 13, 14],
        ranks: ['10', 'J', 'Q', 'K', 'A'],
        isSameSuite: true,
        expectedResult: true
      },
      {
        cards: '[A♣, 10♣, K♣, J♣, Q♥]',
        hasEmptySlots: false,
        distinctValues: [10, 11, 12, 13, 14],
        ranks: ['10', 'J', 'Q', 'K', 'A'],
        isSameSuite: false,
        expectedResult: false
      },
      {
        cards: '[10♣, K♣, J♣, Q♣, 9♣]',
        hasEmptySlots: false,
        distinctValues: [9, 10, 11, 12, 13],
        ranks: ['9', '10', 'J', 'Q', 'K'],
        isSameSuite: true,
        expectedResult: false
      },
      {
        cards: '[A♣, 10♣]',
        hasEmptySlots: false,
        distinctValues: [10, 14],
        ranks: ['10', 'A'],
        isSameSuite: true,
        expectedResult: false
      },
    ]

    parameters.forEach(({ cards, hasEmptySlots, distinctValues, ranks, isSameSuite, expectedResult }) => {
      it(`Should return ${expectedResult} for line with cards: ${cards}`, () => {
        gridLineStub.hasEmptySlots.mockReturnValue(hasEmptySlots)
        gridLineStub.getDistinctValues.mockReturnValue(distinctValues)
        gridLineStub.isSameSuite.mockReturnValue(isSameSuite)
        gridLineStub.hasRank.mockImplementation((rank) => ranks.includes(rank))

        const actual = sut.test(gridLineStub)
        expect(actual).toBe(expectedResult)
      })
    })
  })
})