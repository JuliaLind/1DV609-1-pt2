import { describe, it, expect } from 'vitest'
import { Flush } from '../../src/js/rules/Flush.js'

describe('Flush', () => {
  it('toObject should return {name: "Flush", points: 20 }', () => {
    const sut = new Flush()
    const expected = {
      name: 'Flush',
      points: 20
    }

    expect(sut.toObject()).toEqual(expected)
  })
})
