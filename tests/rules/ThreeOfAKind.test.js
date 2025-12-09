import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/js/rules/ThreeOfAKind.js'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('ThreeOfAKind', () => {
  it('ThreeOfAKind should inherit test method from SameOfAKind', () => {
    expect(ThreeOfAKind.prototype.test).toBe(SameOfAKind.prototype.test)
  })

  it('ThreeOfAKind sameRankRount getter should return 3', () => {
    const sut = new ThreeOfAKind()

    expect(sut.sameRankCount).toBe(3)
  })

  it('toObject should return {name: "Three Of A Kind", points: 2 }', () => {
    const sut = new ThreeOfAKind()
    const expected = {
      name: 'Three Of A Kind',
      points: 10
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
