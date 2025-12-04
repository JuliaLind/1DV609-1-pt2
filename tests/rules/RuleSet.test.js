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
    const _ruleSet = new RuleSet()

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
})
