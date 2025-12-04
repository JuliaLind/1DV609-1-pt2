import { describe, it, expect, vi, afterEach } from 'vitest'
import { RuleSet } from '../../src/js/rules/RuleSet.js'

import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'
import { StraightFlush } from '../../src/js/rules/StraightFlush.js'
import { FourOfAKind } from '../../src/js/rules/FourOfAKind.js'
import { FullHouse } from '../../src/js/rules/FullHouse.js'
import { Flush } from '../../src/js/rules/Flush.js'
import { Straight } from '../../src/js/rules/Straight.js'
import { ThreeOfAKind } from '../../src/js/rules/ThreeOfAKind.js'
import { TwoPairs } from '../../src/js/rules/TwoPairs.js'
import { OnePair } from '../../src/js/rules/OnePair.js'

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

vi.mock('../../src/js/rules/RoyalFlush.js', () => {
  return {
    RoyalFlush: vi.fn()
  }
})

vi.mock('../../src/js/rules/StraightFlush.js', () => {
  return {
    StraightFlush: vi.fn()
  }
})

vi.mock('../../src/js/rules/FourOfAKind.js', () => {
  return {
    FourOfAKind: vi.fn()
  }
})

vi.mock('../../src/js/rules/FullHouse.js', () => {
  return {
    FullHouse: vi.fn()
  }
})

vi.mock('../../src/js/rules/Flush.js', () => {
  return {
    Flush: vi.fn()
  }
})

vi.mock('../../src/js/rules/Straight.js', () => {
  return {
    Straight: vi.fn()
  }
})

vi.mock('../../src/js/rules/ThreeOfAKind.js', () => {
  return {
    ThreeOfAKind: vi.fn()
  }
})

vi.mock('../../src/js/rules/TwoPairs.js', () => {
  return {
    TwoPairs: vi.fn()
  }
})

vi.mock('../../src/js/rules/OnePair.js', () => {
  return {
    OnePair: vi.fn()
  }
})

describe('RuleSet', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('RuleSet should create the rules in the correct order', () => {
    new RuleSet() // eslint-disable-line no-new

    const actualOrder = [
      RoyalFlush.mock.invocationCallOrder[0],
      StraightFlush.mock.invocationCallOrder[0],
      FourOfAKind.mock.invocationCallOrder[0],
      FullHouse.mock.invocationCallOrder[0],
      Flush.mock.invocationCallOrder[0],
      Straight.mock.invocationCallOrder[0],
      ThreeOfAKind.mock.invocationCallOrder[0],
      TwoPairs.mock.invocationCallOrder[0],
      OnePair.mock.invocationCallOrder[0]
    ]

    const expectedOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(actualOrder).toEqual(expectedOrder)
  })

  describe('RuleSet.evaluate', () => {
    const royalFlushStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Royal Flush', points: 100 }
      }
    }
    RoyalFlush.mockImplementation(function () {
      return royalFlushStub
    })

    const straightFlushStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Straight Flush', points: 75 }
      }
    }

    StraightFlush.mockImplementation(function () {
      return straightFlushStub
    })

    const fourOfAKindStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Four of a Kind', points: 50 }
      }
    }

    FourOfAKind.mockImplementation(function () {
      return fourOfAKindStub
    })

    const fullHouseStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Full House', points: 25 }
      }
    }

    FullHouse.mockImplementation(function () {
      return fullHouseStub
    })

    const flushStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Flush', points: 20 }
      }
    }

    Flush.mockImplementation(function () {
      return flushStub
    })

    const straightStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Straight', points: 15 }
      }
    }

    Straight.mockImplementation(function () {
      return straightStub
    })

    const threeOfAKindStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return {
          name: 'Three of a Kind', points: 10
        }
      }
    }

    ThreeOfAKind.mockImplementation(function () {
      return threeOfAKindStub
    })

    const twoPairsStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'Two Pairs', points: 5 }
      }
    }

    TwoPairs.mockImplementation(function () {
      return twoPairsStub
    })

    const onePairStub = {
      test: vi.fn().mockReturnValue(false),
      /**
       * Stub method.
       *
       * @returns {object} - associative array with name and points of the rule.
       */
      toObject: () => {
        return { name: 'One Pair', points: 2 }
      }
    }

    OnePair.mockImplementation(function () {
      return onePairStub
    })

    it('RuleSet.evaluate should return default rule value when no rules match', () => {
      const sut = new RuleSet()
      const lineStub = {}
      const result = sut.evaluate(lineStub)

      expect(result).toEqual({
        name: '',
        points: 0
      })
    })

    it('RuleSet.evaluate should return the highest ranking rule that matches', () => {
      for (const ruleMock of [
        straightFlushStub,
        flushStub,
        straightStub
      ]) {
        ruleMock.test
          .mockReset()
          .mockReturnValue(true)
      }

      const sut = new RuleSet()
      const lineStub = {}

      const expected = {
        name: 'Straight Flush',
        points: 75
      }
      const actual = sut.evaluate(lineStub)

      expect(actual).toEqual(expected)
    })
  })
})
