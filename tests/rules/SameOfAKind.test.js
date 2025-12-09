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

    expect(() => new ConcreteRule(2)).not.toThrow()
  })

  it('Instantiating subclass of SameOfAKind without the rankCount parameter should throw an Error', () => {
    /**
     * Subclass of SameOfAKind for testing purposes.
     */
    class ConcreteRule extends SameOfAKind { }

    expect(() => new ConcreteRule()).toThrowError()
  })

  it(`SameOfAKind.test() method should return true for rule that requires 3 of same rank when the line contains tree cards of rank 2`, () => {
    /**
     * Subclass of SameOfAKind for testing purposes.
     */
    class ConcreteRule extends SameOfAKind { }

    const sut = new ConcreteRule(3)

    const lineStub = {
      /**
       * Stub method for getRankFrequencies.
       *
       * @returns {object} - a stubbed rank frequencies object that says there are three cards of rank 2
       */
      getRankFrequencies: () => ({
        2: 3
      })
    }

    expect(sut.test(lineStub)).toBe(true)
  })
})
