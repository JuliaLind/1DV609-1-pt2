import { describe, it, expect, vi } from 'vitest'
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

  const parameters = [
    { sameRankCount: 3, expected: true },
    { sameRankCount: 4, expected: false },
    { sameRankCount: 2, expected: false }
  ]

  parameters.forEach(({ sameRankCount, expected }) => {
    it(`SameOfAKind.test() method should return ${expected} for rule that requires ${sameRankCount} of same rank when the line contains tree cards of rank 2`, () => {
      /**
       * Subclass of SameOfAKind for testing purposes.
       */
      class ConcreteRule extends SameOfAKind { }

      const sut = new ConcreteRule(sameRankCount)

      const lineStub = vi.fn({
        getRankFrequencies: vi.fn().mockReturnValue({
          2: 3
        })
      })

      expect(sut.test(lineStub)).toBe(expected)
    })
  })
})
