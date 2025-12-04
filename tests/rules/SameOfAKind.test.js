import { describe, it, vi, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'


describe('SameOfAKind', () => {
  it('Is an abstract class - Instantiating directly should throw an error', () => {
    expect(() => new SameOfAKind()).toThrowError(Error)
  })

  it('Instantiating subclass of SameOfAKind should not throw an error', () => {
    class ConcreteRule extends SameOfAKind {
      constructor() {
        super(2)
      }
    }

    expect(() => new ConcreteRule()).not.toThrow()
  })

  const parameters = [
    { rankCount: 3, expected: true },
    { rankCount: 4, expected: false },
    { rankCount: 2, expected: false },
  ]

  parameters.forEach(({ rankCount, expected }) => {
    it(`test() method should return ${expected} for rule that requires ${rankCount} of same rank when the line contains tree cards of rank 2`, () => {
      class ConcreteRule extends SameOfAKind {
        constructor(rankCount) {
          super(rankCount)
        }
      }

      const sut = new ConcreteRule(rankCount)

      const line = {
        getRankFrequencies: () => ({
          2: 3,
        })
      }

      expect(sut.test(line)).toBe(expected)
    })
  })

  it('Instantiating subclass of SameOfAKind without the rankCount parameter should throw an Error', () => {
    class ConcreteRule extends SameOfAKind {
      constructor(rankCount) {
        super(rankCount)
      }
    }

    expect(() => new ConcreteRule()).toThrowError()
  })
})