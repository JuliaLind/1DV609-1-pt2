import { describe, it, expect, vi } from 'vitest'
import { RuleSet } from '../../src/js/rules/RuleSet.js'

describe('RuleSet', () => {
  it('RuleSet.evaluate() should call the rules in the correct order regardless of the injection order', () => {
    const royalFlushMock = vi.fn({
      test: vi.fn()
    })
    const straightFlushMock = vi.fn({
      test: vi.fn()
    })
    const fourOfAKindMock = vi.fn({
      test: vi.fn()
    })

    const fullHouseMock = vi.fn({
      test: vi.fn()
    })
    const flushMock = vi.fn({
      test: vi.fn()
    })

    const straightMock = vi.fn({
      test: vi.fn()
    })

    const threeOfAKindMock = vi.fn({
      test: vi.fn()
    })

    const twoPairsMock = vi.fn({
      test: vi.fn()
    })

    const onePairMock = vi.fn({
      test: vi.fn()
    })

    const sut = new RuleSet({
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

    const lineDummy = {}

    sut.evaluate(lineDummy)

    const actualOrder = [
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

    console.log(onePairMock.test.mock)

    const expectedOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(actualOrder).toEqual(expectedOrder)
  })
})
