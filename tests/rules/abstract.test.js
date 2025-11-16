import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/rules/SameOfAKind.js'
import { Rule } from '../../src/rules/Rule.js'
import { Sequential } from '../../src/rules/Sequential.js'



describe('Abstract classes should not be instantiable', () => {
  it ('Instantiating SameOfAKind should throw an error', () => {
    expect(() => new SameOfAKind(2)).toThrowError(Error)
  })

  it ('Instantiating Rule should throw an error', () => {
    expect(() => new Rule(2, 'One Pair')).toThrowError(Error)
  })

  it ('Instantiating Sequential should throw an error', () => {
    expect(() => new Sequential(15, 'Straight')).toThrowError(Error)
  })
})