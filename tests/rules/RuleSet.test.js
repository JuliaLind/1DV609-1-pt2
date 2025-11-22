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

  describe('RuleSet.evaluateLine() should call rules in correct order', () => {
    it('If RoyalFlush matches, straightFlush, Flush and Straight should not be called', () => {
      royalFlushMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(royalFlushMock.test).toHaveBeenCalled()
      expect(straightFlushMock.test).not.toHaveBeenCalled()
      expect(flushMock.test).not.toHaveBeenCalled()
      expect(straightMock.test).not.toHaveBeenCalled()
    })

    it('If StraightFlush matches, Flush and Straight should not be called', () => {
      straightFlushMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(straightFlushMock.test).toHaveBeenCalled()
      expect(flushMock.test).not.toHaveBeenCalled()
      expect(straightMock.test).not.toHaveBeenCalled()
    })

    it("If StraightFlush doesn't match, Flush and Straight should be called", () => {
      sut.evaluateLine({})

      expect(straightFlushMock.test).toHaveBeenCalled()
      expect(flushMock.test).toHaveBeenCalled()
      expect(straightMock.test).toHaveBeenCalled()
    })

    it('If FourOfAKind matches, FullHouse, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fourOfAKindMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(fourOfAKindMock.test).toHaveBeenCalled()
      expect(fullHouseMock.test).not.toHaveBeenCalled()
      expect(threeOfAKindMock.test).not.toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If FullHouse matches, ThreeOfAKind, TwoPairs and OnePair should not be called', () => {
      fullHouseMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(fullHouseMock.test).toHaveBeenCalled()
      expect(threeOfAKindMock.test).not.toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If ThreeOfAKind matches, TwoPairs and OnePair should not be called', () => {
      threeOfAKindMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(threeOfAKindMock.test).toHaveBeenCalled()
      expect(twoPairsMock.test).not.toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })

    it('If TwoPairs matches, OnePair should not be called', () => {
      twoPairsMock.test.mockReturnValue(true)

      sut.evaluateLine({})

      expect(twoPairsMock.test).toHaveBeenCalled()
      expect(onePairMock.test).not.toHaveBeenCalled()
    })
  })

  describe('RuleSet.evaluateLine() returnvalue', () => {
    it('Should return {name: "", points: 0 } if no rule matches', () => {
      const result = sut.evaluateLine({})

      expect(result).toEqual({ name: '', points: 0 })
    })

    it('Should return correct result if a rule matches', () => {
      const expected = { name: 'Full House', points: 25 }

      fullHouseMock.test.mockReturnValue(true)

      const actual = sut.evaluateLine({})

      expect(actual).toEqual(expected)
    })
  })

  describe('RuleSet.evaluateGrid()', () => {
    it('Should evaluate all rows and columns', () => {
      const row1 = {}
      const row2 = {}
      const row3 = {}
      const row4 = {}
      const row5 = {}
      const column1 = {}
      const column2 = {}
      const column3 = {}
      const column4 = {}
      const column5 = {}

      const gridStub = {
        getRow: vi.fn().mockImplementation((index) => {
          switch (index) {
            case 0: return row1
            case 1: return row2
            case 2: return row3
            case 3: return row4
            case 4: return row5
          }
        }),
        getColumn: vi.fn().mockImplementation((index) => {
          switch (index) {
            case 0: return column1
            case 1: return column2
            case 2: return column3
            case 3: return column4
            case 4: return column5
          }
        })
      }

      sut.evaluateLine = vi.fn()

      sut.evaluateGrid(gridStub)

      for (const line of [row1, row2, row3, row4, row5,
        column1, column2, column3, column4, column5
      ]) {
        expect(sut.evaluateLine).toHaveBeenCalledWith(line)
      }
    })

    it('Should return the evaluated results', () => {
      const row3 = {}
      const column4 = {}

      sut.evaluateLine = vi.fn().mockImplementation((line) => {
        if (line === row3) {
          return { name: 'Three of a Kind', points: 10 }
        }
        if (line === column4) {
          return { name: 'Flush', points: 20 }
        }
        return { name: '', points: 0 }
      })

      const gridStub = {
        getRow: vi.fn().mockImplementation((index) => {
          switch (index) {
            case 2: return row3
          }
        }),
        getColumn: vi.fn().mockImplementation((index) => {
          switch (index) {
            case 3: return column4
          }
        })
      }

      const actual = sut.evaluateGrid(gridStub)
      const expected = {
        rows: [
          { name: '', points: 0 },
          { name: '', points: 0 },
          { name: 'Three of a Kind', points: 10 },
          { name: '', points: 0 },
          { name: '', points: 0 },
        ],
        columns: [
          { name: '', points: 0 },
          { name: '', points: 0 },
          { name: '', points: 0 },
          { name: 'Flush', points: 20 },
          { name: '', points: 0 },
        ]
      }

      expect(actual).toEqual(expected)
    })
  })
})