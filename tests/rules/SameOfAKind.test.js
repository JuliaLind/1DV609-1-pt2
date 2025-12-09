import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('SameOfAKind', () => {
  it('Is an abstract class - Instantiating directly should throw an error', () => {
    expect(() => new SameOfAKind()).toThrowError(Error)
  })
})
