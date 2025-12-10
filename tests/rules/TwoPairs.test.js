import { describe, it, expect, vi } from 'vitest'
import { TwoPairs } from '../../src/js/rules/TwoPairs.js'

describe('TwoPairs', () => {
  it('toObject should return {name: "Two Pairs", points: 5 }', () => {
    const sut = new TwoPairs()
    const expected = {
      name: 'Two Pairs',
      points: 5
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('TwoPairs.test() should return true for line that has two pairs', () => {
    const sut = new TwoPairs()
    const lineStub = vi.fn({
      getRankFrequencies: vi.fn().mockReturnValue({
        2: 2,
        3: 2
      })
    })

    expect(sut.test(lineStub)).toBe(true)
  })

  it('TwoPairs.test() should return false for line that has one pair and three-of-a-kind of another rank', () => {
    const sut = new TwoPairs()
    const lineStub = vi.fn({
      getRankFrequencies: vi.fn().mockReturnValue({
        2: 2,
        3: 3
      })
    })

    expect(sut.test(lineStub)).toBe(false)
  })
})
