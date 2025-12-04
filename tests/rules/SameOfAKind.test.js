import { describe, it, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'

describe('SameOfAKind', () => {
  it('Is an abstract class - Instantiating directly should throw an error', () => {
    expect(() => new SameOfAKind()).toThrowError(Error)
  })

  it('Instantiating subclass of SameOfAKind should not throw an error', () => {
    /**
     * Subclass of SameOfAKind for testing purposes
     */
    class ConcreteRule extends SameOfAKind {
      /**
       * Creates an instance of ConcreteRule.
       */
      constructor() {
        super(2)
      }
    }

    expect(() => new ConcreteRule()).not.toThrow()
  })

  const parameters = [
    { rankCount: 3, expected: true },
    { rankCount: 4, expected: false },
    { rankCount: 2, expected: false }
  ]

  parameters.forEach(({ rankCount, expected }) => {
    it(`SameOfAKind.test() method should return ${expected} for rule that requires ${rankCount} of same rank when the line contains tree cards of rank 2`, () => {
      /**
       * Subclass of SameOfAKind for testing purposes
       */
      class ConcreteRule extends SameOfAKind {
        /**
         * Creates an instance of ConcreteRule.
         *
         * @param {number} sameRankCount - the number of same rank cards required to fulfill the rule
         */
        constructor(sameRankCount) {
          super(sameRankCount)
        }
      }

      const sut = new ConcreteRule(rankCount)

      const lineStub = {
        /**
         * Stub method for getRankFrequencies
         *
         * @returns {object} - a stubbed rank frequencies object that says there are three cards of rank 2
         */
        getRankFrequencies: () => ({
          2: 3
        })
      }

      expect(sut.test(lineStub)).toBe(expected)
    })
  })

  it('Instantiating subclass of SameOfAKind without the rankCount parameter should throw an Error', () => {
    /**
     * Subclass of SameOfAKind for testing purposes
     */
    class ConcreteRule extends SameOfAKind {}

    expect(() => new ConcreteRule()).toThrowError()
  })
})
