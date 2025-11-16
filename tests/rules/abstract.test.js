import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/rules/SameOfAKind.js'
import { Rule } from '../../src/rules/Rule.js'


describe('Abstract classes should not be instantiable', () => {
  it ('Instantiating SameOfAKind should throw an error', () => {
    expect(() => new SameOfAKind(2)).toThrowError(Error)
  })

  it ('Instantiating Rule should throw an error', () => {
    expect(() => new Rule(2, 'One Pair')).toThrowError(Error)
  })
})