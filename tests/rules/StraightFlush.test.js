import { describe, it, expect, vi } from 'vitest'
import { StraightFlush } from '../../src/js/rules/StraightFlush.js'

describe('StraightFlush', () => {
  it('toObject should return {name: "Straight Flush", points: 75 }', () => {
    const sut = new StraightFlush()
    const expected = {
      name: 'Straight Flush',
      points: 75
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('StraightFlush.test() should return true if both Straight.test and Flush.test return true', () => {
    const straightStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const flushStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const sut = new StraightFlush(straightStub, flushStub)

    expect(sut.test()).toBe(true)
  })

  it('StraightFlush.test() should return false if Straight.test returns false', () => {
    const straightStub = vi.fn({
      test: vi.fn().mockReturnValue(false)
    })

    const flushStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const sut = new StraightFlush(straightStub, flushStub)

    expect(sut.test()).toBe(false)
  })

  it('StraightFlush.test() should return false if Flush.test returns false', () => {
    const straightStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const flushStub = vi.fn({
      test: vi.fn().mockReturnValue(false)
    })

    const sut = new StraightFlush(straightStub, flushStub)

    expect(sut.test()).toBe(false)
  })
})
