import { describe, it, expect } from 'vitest'
import { Rule } from '../../src/js/rules/Rule.js'

describe('Rule', () => {
  it('Rule should be abstract - instantiating directly should throw an error', () => {
    expect(() => new Rule()).toThrowError(Error)
  })
})
