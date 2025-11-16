import { describe, it, expect } from 'vitest'
import { Straight } from '../../src/rules/Straight.js'



describe('Straight', () => {
  const sut = new Straight()

  it('getValue should return 15', () => {
    expect(sut.getValue()).toBe(15)
  })

  it('toString should return "Straight"', () => {
    expect(sut.toString()).toBe('Straight')
  })
})