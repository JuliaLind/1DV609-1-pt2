import { describe, it, expect } from 'vitest'
import { Rule } from '../../src/js/rules/Rule.js'

describe('Rule', () => {
  it('Rule should be abstract - instantiating directly should throw an error', () => {
    expect(() => new Rule()).toThrowError(Error)
  })

  it('Instantiating subclass of Rule should not throw an error', () => {
    /**
     * Subclass of Rule for testing purposes
     */
    class ConcreteRule extends Rule { }

    expect(() => new ConcreteRule()).not.toThrow()
  })
})
