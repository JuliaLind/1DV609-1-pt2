import { describe, it, expect } from 'vitest'
import { Rule } from '../../src/js/rules/Rule.js'


describe('Rule', () => {
  it ('Instantiating Rule should throw an error', () => {
    expect(() => new Rule(2, 'One Pair')).toThrowError(Error)
  })

  it('toObject() should return correct object representation', () => {
    class ConcreteRule extends Rule {}
    const sut = new ConcreteRule(100, 'Concrete Rule')

    const expected = {
      rule: 'Concrete Rule',
      points: 100
    }

    const actual = sut.toObject()

    expect(actual).toEqual(expected)
  })
})