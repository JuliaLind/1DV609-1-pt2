import { describe, it, expect } from 'vitest'
import { FourOfAKind } from '../../src/js/rules/FourOfAKind.js'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('FourOfAKind', () => {
  it('FourOfAKind should inherit test method from SameOfAKind', () => {
    expect(FourOfAKind.prototype.test).toBe(SameOfAKind.prototype.test)
  })

  it('FourOfAKind sameRankRount getter should return 4', () => {
    const sut = new FourOfAKind()

    expect(sut.sameRankCount).toBe(4)
  })

  it('toObject should return {name: "Four Of A Kind", points: 50 }', () => {
    const sut = new FourOfAKind()
    const expected = {
      name: 'Four Of A Kind',
      points: 50
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
