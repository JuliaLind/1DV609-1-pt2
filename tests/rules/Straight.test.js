import { describe, it, expect } from 'vitest'
import { Straight } from '../../src/js/rules/Straight.js'

describe('Straight', () => {
  it('toObject should return {name: "Straight", points: 15 }', () => {
    const sut = new Straight()
    const expected = {
      name: 'Straight',
      points: 15
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
