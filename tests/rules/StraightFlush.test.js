import { describe, it, expect } from 'vitest'
import { StraightFlush } from '../../src/rules/StraightFlush.js'

describe('Straight Flush', () => {
  const sut = new StraightFlush()

  it('getValue should return 75', () => {
    expect(sut.getValue()).toBe(75)
  })

  it('toString should return "Straight Flush"', () => {
    expect(sut.toString()).toBe('Straight Flush')
  })
})