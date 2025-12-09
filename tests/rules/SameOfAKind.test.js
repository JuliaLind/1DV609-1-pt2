import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('SameOfAKind', () => {
  it('Is an abstract class - Instantiating directly should throw an error', () => {
    expect(() => new SameOfAKind()).toThrowError(Error)
  })

  it('Instantiating subclass of SameOfAKind should not throw an error', () => {
    /**
     * Subclass of SameOfAKind for testing purposes.
     */
    class ConcreteRule extends SameOfAKind {
    }

    expect(() => new ConcreteRule()).not.toThrow()
  })

})
