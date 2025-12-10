import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RuleSet } from '../../src/js/rules/RuleSet.js'

vi.mock('../../src/js/rules/Rule.js', () => {
  return {
    Rule: vi.fn({
      /**
       * Default toObject method stub.
       *
       * @returns {object} - associative array with empty string as name and 0 as points.
       */
      toObject: () => {
        return { name: '', points: 0 }
      }
    })
  }
})

describe('RuleSet', () => {
  it('RuleSet.evaluate should pass the GridLine into the test() method of the rules', () => {
    const anyRuleMock = vi.fn({
      test: vi.fn(),
      toObject: vi.fn()
    })

    const sut = new RuleSet({
      onePair: anyRuleMock,
      twoPairs: anyRuleMock,
      threeOfAKind: anyRuleMock,
      royalFlush: anyRuleMock,
      straightFlush: anyRuleMock,
      fourOfAKind: anyRuleMock,
      fullHouse: anyRuleMock,
      straight: anyRuleMock,
      flush: anyRuleMock
    })

    const lineDummy = {}

    sut.evaluate(lineDummy)

    expect(anyRuleMock.test).toHaveBeenCalledWith(lineDummy)
  })

  describe('', () => {
    const royalFlushMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Royal Flush', points: 100 })
    })
    const straightFlushMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Straight Flush', points: 75 })
    })
    const fourOfAKindMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Four of a Kind', points: 50 })
    })
    const fullHouseMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Full House', points: 25 })
    })
    const flushMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Flush', points: 20 })
    })
    const straightMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Straight', points: 15 })
    })
    const threeOfAKindMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Three of a Kind', points: 10 })
    })
    const twoPairsMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'Two Pairs', points: 5 })
    })
    const onePairMock = vi.fn({
      toObject: vi.fn().mockReturnValue({ name: 'One Pair', points: 2 })
    })

    let sut
    beforeEach(() => {
      royalFlushMock.test = vi.fn().mockReturnValue(false)
      straightFlushMock.test = vi.fn().mockReturnValue(false)
      fourOfAKindMock.test = vi.fn().mockReturnValue(false)
      fullHouseMock.test = vi.fn().mockReturnValue(false)
      flushMock.test = vi.fn().mockReturnValue(false)
      straightMock.test = vi.fn().mockReturnValue(false)
      threeOfAKindMock.test = vi.fn().mockReturnValue(false)
      twoPairsMock.test = vi.fn().mockReturnValue(false)
      onePairMock.test = vi.fn().mockReturnValue(false)

      sut = new RuleSet({
        onePair: onePairMock,
        twoPairs: twoPairsMock,
        threeOfAKind: threeOfAKindMock,
        royalFlush: royalFlushMock,
        straightFlush: straightFlushMock,
        fourOfAKind: fourOfAKindMock,
        fullHouse: fullHouseMock,
        straight: straightMock,
        flush: flushMock
      })
    })

    it('RuleSet.evaluate() should call the rules in the correct order regardless of the injection order', () => {
      const lineDummy = {}

      sut.evaluate(lineDummy)

      const actualOrderRaw = [
        royalFlushMock.test.mock.invocationCallOrder[0],
        straightFlushMock.test.mock.invocationCallOrder[0],
        fourOfAKindMock.test.mock.invocationCallOrder[0],
        fullHouseMock.test.mock.invocationCallOrder[0],
        flushMock.test.mock.invocationCallOrder[0],
        straightMock.test.mock.invocationCallOrder[0],
        threeOfAKindMock.test.mock.invocationCallOrder[0],
        twoPairsMock.test.mock.invocationCallOrder[0],
        onePairMock.test.mock.invocationCallOrder[0]
      ]

      // Normalize actual order to start on 1 because invocationCallOrder counts all calls globally
      // in the testsuite
      const firstNr = actualOrderRaw[0]
      const actualOrder = actualOrderRaw.map(actualNr => actualNr - firstNr + 1)

      const expectedOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      expect(actualOrder).toEqual(expectedOrder)
    })

    it('RuleSet.evaluate should return default rule name and points when no rules match', () => {
      const lineDummy = {}
      const result = sut.evaluate(lineDummy)

      expect(result).toEqual({
        name: '',
        points: 0
      })
    })

    it('RuleSet.evaluate should return the highest ranking rule that matches', () => {
      for (const ruleMock of [
        straightFlushMock,
        flushMock,
        straightMock
      ]) {
        ruleMock.test
          .mockReset()
          .mockReturnValue(true)
      }

      const lineDummy = {}

      const expected = {
        name: 'Straight Flush',
        points: 75
      }
      const actual = sut.evaluate(lineDummy)

      expect(actual).toEqual(expected)
    })
  })
})
