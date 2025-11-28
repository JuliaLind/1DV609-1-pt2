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

    afterEach(() => {
      vi.clearAllMocks()
    })

    const parameters = [
      {
        cards: '[A♣, 10♣, K♣, J♣, Q♣]',
        hasEmptySlots: false,
        distinctValues: [10, 11, 12, 13, 14],
        ranks: ['10', 'J', 'Q', 'K', 'A'],
        rankFrequencies: { '10': 1, 'J': 1, 'Q': 1, 'K': 1, 'A': 1 },
        isSameSuite: true,
        expectedResult: true
      },
      {
        cards: '[A♣, 10♣, K♣, J♣, Q♥]',
        hasEmptySlots: false,
        distinctValues: [10, 11, 12, 13, 14],
        ranks: ['10', 'J', 'Q', 'K', 'A'],
        rankFrequencies: { '10': 1, 'J': 1, 'Q': 1, 'K': 1, 'A': 1 },
        isSameSuite: false,
        expectedResult: false
      },
      {
        cards: '[10♣, K♣, J♣, Q♣, 9♣]',
        hasEmptySlots: false,
        distinctValues: [9, 10, 11, 12, 13],
        ranks: ['9', '10', 'J', 'Q', 'K'],
        rankFrequencies: { '9': 1, '10': 1, 'J': 1, 'Q': 1, 'K': 1 },
        isSameSuite: true,
        expectedResult: false
      },
      {
        cards: '[A♣, 10♣]',
        hasEmptySlots: false,
        distinctValues: [10, 14],
        ranks: ['10', 'A'],
        rankFrequencies: { '10': 1, 'A': 1 },
        isSameSuite: true,
        expectedResult: false
      },
    ]

    parameters.forEach(({ cards, hasEmptySlots, distinctValues, ranks, rankFrequencies, isSameSuite, expectedResult }) => {
      it(`Should return ${expectedResult} for line with cards: ${cards}`, () => {
        gridLineStub = vi.fn({
          hasEmptySlots: vi.fn().mockReturnValue(hasEmptySlots),
          getDistinctValues: vi.fn().mockReturnValue(distinctValues),
          isSameSuite: vi.fn().mockReturnValue(isSameSuite),
          hasRank: vi.fn().mockImplementation((rank) => ranks.includes(rank)),
          getRankFrequencies: vi.fn().mockReturnValue(rankFrequencies),
        })

        const actual = sut.test(gridLineStub)
        expect(actual).toBe(expectedResult)
      })
    })
  })
})