import { describe, it, expect, vi } from 'vitest'
import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'

describe('RoyalFlush', () => {
  it('toObject should return {name: "Royal Flush", points: 100 }', () => {
    const sut = new RoyalFlush()
    const expected = {
      name: 'Royal Flush',
      points: 100
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('RoyalFlush.test should return true if StraightFlush.test returns true and GridLine.hasRank returns true', () => {
    const straightFlushStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    // eslint-disable-next-line
    const lineStub = vi.fn({
      hasRank: vi.fn().mockReturnValue(true)
    })

    const sut = new RoyalFlush(straightFlushStub)

    expect(sut.test(lineStub)).toBe(true)
  })

    it('RoyalFlush.test should test that gridLine contains an Ace (hasRank(14)', () => {
      const straightFlushStub = vi.fn({
        test: vi.fn().mockReturnValue(true)
      })

      // eslint-disable-next-line
      const lineMock= vi.fn({
        hasRank: vi.fn().mockReturnValue(true)
      })

      const sut = new RoyalFlush(straightFlushStub)
      sut.test(lineMock)

      expect(lineMock.hasRank).toHaveBeenCalledWith(14)
    })
})
