import { describe, it, vi, expect } from 'vitest'
import { SameOfAKind } from '../../src/js/rules/SameOfAKind.js'


describe('SameOfAKind', () => {
  it('Is an abstract class - Instantiating directly should throw an error', () => {
    expect(() => new SameOfAKind()).toThrowError(Error)
  })

  it('Instantiating subclass of SameOfAKind should not throw an error', () => {
    class ConcreteRule extends SameOfAKind {
      constructor() {
        super()
      }
    }

    expect(() => new ConcreteRule()).not.toThrow()
  })

  it('test() method should return true if the line meets the required rank count', () => {
    class ConcreteRule extends SameOfAKind {
      constructor(rankCount) {
        super(rankCount)
      }
    }

    const sut = new ConcreteRule(3)

    const line = {
      getRankFrequencies: () => ({
        2: 3,
      })
    }

    expect(sut.test(line)).toBe(true)
  })
})