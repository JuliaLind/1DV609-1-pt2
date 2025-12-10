import { describe, it, expect, vi } from 'vitest'
import { Straight } from '../../src/js/rules/Straight.js'

describe('Straight', () => {
  it('toObject should return {name: "Straight", points: 15 }', () => {
    const sut = new Straight()
    const expected = {
      name: 'Straight',
      points: 15
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('Straight.test() should return true for line with 5 unique consecutive ranks', () => {
    const sut = new Straight()
    const lineStub = vi.fn({
      getRankFrequencies: vi.fn().mockReturnValue({
        10: 1,
        11: 1,
        8: 1,
        9: 1,
        12: 1
      })
    })

    expect(sut.test(lineStub)).toBe(true)
  })

  it('Straight.test() should return false for line with two or more cards of same rank', () => {
    const sut = new Straight()
    const lineStub = vi.fn({
      getRankFrequencies: vi.fn().mockReturnValue({
        10: 2,
        8: 1,
        9: 1,
        12: 1
      })
    })

    expect(sut.test(lineStub)).toBe(false)
  })

  it('Straight.test() should return false for line with 5 unique non-consecutive ranls', () => {
    const sut = new Straight()
    const lineStub = vi.fn({
      getRankFrequencies: vi.fn().mockReturnValue({
        7: 1,
        8: 1,
        10: 1,
        11: 1,
        12: 1
      })
    })

    expect(sut.test(lineStub)).toBe(false)
  })
})
