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
})
