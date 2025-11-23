import { describe, it, expect, vi, beforeEach, afterEach, afterAll, beforeAll } from 'vitest'
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


vi.mock('../../src/js/rules/RoyalFlush.js', () => {
  return {
    RoyalFlush: vi.fn()
  }
})

vi.mock('../../src/js/rules/StraightFlush.js', () => {
  return {
    StraightFlush: vi.fn(),
  }
})

vi.mock('../../src/js/rules/FourOfAKind.js', () => {
  return {
    FourOfAKind: vi.fn(),
  }
})

vi.mock('../../src/js/rules/FullHouse.js', () => {
  return {
    FullHouse: vi.fn(),
  }
})

vi.mock('../../src/js/rules/Flush.js', () => {
  return {
    Flush: vi.fn(),
  }
})

vi.mock('../../src/js/rules/Straight.js', () => {
  return {
    Straight: vi.fn(),
  }
})

vi.mock('../../src/js/rules/ThreeOfAKind.js', () => {
  return {
    ThreeOfAKind: vi.fn(),
  }
})

vi.mock('../../src/js/rules/TwoPairs.js', () => {
  return {
    TwoPairs: vi.fn(),
  }
})

vi.mock('../../src/js/rules/OnePair.js', () => {
  return {
    OnePair: vi.fn(),
  }
})

describe('RuleSet', () => {
  let sut

  let royalFlushMock
  let straightFlushMock
  let fourOfAKindMock
  let fullHouseMock
  let flushMock
  let straightMock
  let threeOfAKindMock
  let twoPairsMock
  let onePairMock

  beforeAll(() => {
    royalFlushMock = {
      test: vi.fn().mockName('RoyalFlush.test'), // mockName is the name shown in test output if fails
      toString: () => 'Royal Flush',
      valueOf: () => 100,
    }

    straightFlushMock = {
      test: vi.fn().mockName('StraightFlush.test'),
      toString: () => 'Straight Flush',
      valueOf: () => 75,
    }

    fourOfAKindMock = {
      test: vi.fn().mockName('FourOfAKind.test'),
      toString: () => 'Four of a Kind',
      valueOf: () => 50,
    }

    fullHouseMock = {
      test: vi.fn().mockName('FullHouse.test'),
      toString: () => 'Full House',
      valueOf: () => 25,
    }

    flushMock = {
      test: vi.fn().mockName('Flush.test'),
      toString: () => 'Flush',
      valueOf: () => 20,
    }

    straightMock = {
      test: vi.fn().mockName('Straight.test'),
      toString: () => 'Straight',
      valueOf: () => 15,
    }

    threeOfAKindMock = {
      test: vi.fn().mockName('ThreeOfAKind.test'),
      toString: () => 'Three of a Kind',
      valueOf: () => 10,
    }

    twoPairsMock = {
      test: vi.fn().mockName('TwoPairs.test'),
      toString: () => 'Two Pairs',
      valueOf: () => 5,
    }

    onePairMock = {
      test: vi.fn().mockName('OnePair.test'),
      toString: () => 'One Pair',
      valueOf: () => 2,
    }

    RoyalFlush.mockImplementation(function () {
      return royalFlushMock
    })

    StraightFlush.mockImplementation(function () {
      return straightFlushMock
    })

    FourOfAKind.mockImplementation(function () {
      return fourOfAKindMock
    })

    FullHouse.mockImplementation(function () {
      return fullHouseMock
    })

    Flush.mockImplementation(function () {
      return flushMock
    })

    Straight.mockImplementation(function () {
      return straightMock
    })

    ThreeOfAKind.mockImplementation(function () {
      return threeOfAKindMock
    })

    TwoPairs.mockImplementation(function () {
      return twoPairsMock
    })

    OnePair.mockImplementation(function () {
      return onePairMock
    })

    sut = new RuleSet()
  })

  beforeEach(() => {
    for (const ruleStub of [
      royalFlushMock,
      straightFlushMock,
      fourOfAKindMock,
      fullHouseMock,
      flushMock,
      straightMock,
      threeOfAKindMock,
      twoPairsMock,
      onePairMock,
    ]) {
      ruleStub.test.mockReset()
      ruleStub.test.mockReturnValue(false)
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  describe('RuleSet.evaluate() should call rules in correct order', () => {
    it('If RoyalFlush matches, straightFlush, Flush and Straight should not be called', () => {
      royalFlushMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(royalFlushMock.test).toHaveBeenCalled()
      expect(straightFlushMock.test).not.toHaveBeenCalled()
      expect(flushMock.test).not.toHaveBeenCalled()
      expect(straightMock.test).not.toHaveBeenCalled()
    })

    it('If StraightFlush matches, Flush and Straight should not be called', () => {
      straightFlushMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(straightFlushMock.test).toHaveBeenCalled()
      expect(flushMock.test).not.toHaveBeenCalled()
      expect(straightMock.test).not.toHaveBeenCalled()
    })

    it("If StraightFlush doesn't match, Flush and Straight should be called", () => {
      sut.evaluate({})

      expect(straightFlushMock.test).toHaveBeenCalled()
      expect(flushMock.test).toHaveBeenCalled()
      expect(straightMock.test).toHaveBeenCalled()
    })

    it('If FourOfAKind matches, FullHouse, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fourOfAKindMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(fourOfAKindMock.test).toHaveBeenCalled()
      expect(fullHouseMock.test).not.toHaveBeenCalled()
      expect(threeOfAKindMock.test).not.toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If FullHouse matches, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fullHouseMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(fullHouseMock.test).toHaveBeenCalled()
      expect(threeOfAKindMock.test).not.toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If ThreeOfAKind matches, TwoPairs and OnePair should not be called', () => {
      threeOfAKindMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(threeOfAKindMock.test).toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If TwoPairs matches, OnePair should not be called', () => {
      twoPairsMock.test.mockReturnValue(true)

      sut.evaluate({})

      expect(twoPairsMock.test).toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })
  })

  describe('RuleSet.evaluate() returnvalue', () => {
    it('Should return {name: "", points: 0 } if no rule matches', () => {
      const result = sut.evaluate({})

      expect(result).toEqual({ name: '', points: 0 })
    })

    it('Should return correct result if a rule matches', () => {
      const expected = { name: 'Full House', points: 25 }

      fullHouseMock.test.mockReturnValue(true)

      const actual = sut.evaluate({})

      expect(actual).toEqual(expected)
    })
  })
})