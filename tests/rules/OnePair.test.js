import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/js/rules/OnePair.js'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('OnePair', () => {
  it('OnePair should inherit test method from SameOfAKind', () => {
    expect(OnePair.prototype.test).toBe(SameOfAKind.prototype.test)
  })

  it('OnePair sameRankRount getter should return 2', () => {
    const sut = new OnePair()

    expect(sut.sameRankCount).toBe(2)
  })
})
