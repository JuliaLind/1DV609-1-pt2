import { describe, it, expect } from 'vitest'
import { ThreeOfAKind } from '../../src/js/rules/ThreeOfAKind.js'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('ThreeOfAKind', () => {
  it('ThreeOfAKind should inherit test method from SameOfAKind', () => {
    expect(ThreeOfAKind.prototype.test).toBe(SameOfAKind.prototype.test)
  })
})
