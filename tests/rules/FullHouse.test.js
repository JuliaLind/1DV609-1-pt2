import { describe, it, expect, vi } from 'vitest'
import { FullHouse } from '../../src/js/rules/FullHouse.js'

describe('FullHouse', () => {
  it('toObject should return {name: "Full House", points: 25 }', () => {
    const sut = new FullHouse()
    const expected = {
      name: 'Full House',
      points: 25
    }

    expect(sut.toObject()).toEqual(expected)
  })

  it('FullHouse.test() should return true if both ThreeOfAKind.test and OnePair.test return true', () => {
    const onePairStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const threeOfAKindStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const sut = new FullHouse(onePairStub, threeOfAKindStub)

    const lineDummy = {}

    expect(sut.test(lineDummy)).toBe(true)
  })

  it('FullHouse.test() should return false if OnePair.test returns false', () => {
    const onePairStub = vi.fn({
      test: vi.fn().mockReturnValue(false)
    })

    const threeOfAKindStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const sut = new FullHouse(onePairStub, threeOfAKindStub)

    const lineDummy = {}

    expect(sut.test(lineDummy)).toBe(false)
  })

  it('FullHouse.test() should return false if ThreeOfAKind.test returns false', () => {
    const onePairStub = vi.fn({
      test: vi.fn().mockReturnValue(true)
    })

    const threeOfAKindStub = vi.fn({
      test: vi.fn().mockReturnValue(false)
    })

    const sut = new FullHouse(onePairStub, threeOfAKindStub)

    const lineDummy = {}

    expect(sut.test(lineDummy)).toBe(false)
  })
})
