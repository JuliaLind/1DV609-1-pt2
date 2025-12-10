import { describe, it, expect } from 'vitest'
import { StraightFlush } from '../../src/js/rules/StraightFlush.js'

describe('StraightFlush', () => {
  it('toObject should return {name: "Straight Flush", points: 75 }', () => {
    const sut = new StraightFlush()
    const expected = {
      name: 'Straight Flush',
      points: 75
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
