import { describe, it, expect } from 'vitest'
import { RoyalFlush } from '../../src/js/rules/RoyalFlush.js'

describe('RoyalFlush', () => {
  it('toObject should return {name: "Royal Flush", points: 100 }', () => {
    const sut = new RoyalFlush()
    const expected = {
      name: 'Royal Flush',
      points: 100
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
