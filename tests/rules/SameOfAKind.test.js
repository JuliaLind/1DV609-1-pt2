import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'


describe('SameOfAKind', () => {
  it ('Instantiating SameOfAKind should throw an error', () => {
    expect(() => new SameOfAKind(2)).toThrowError(Error)
  })
})