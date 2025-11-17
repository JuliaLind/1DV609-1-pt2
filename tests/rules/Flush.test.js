import { describe, it, expect } from 'vitest'
import { Flush } from '../../src/rules/Flush.js'

describe('Flush', () => {
  const sut = new Flush()
    it('getValue should return 20', () => {
    expect(sut.getValue()).toBe(20)
  })

  it('toString should return "Flush"', () => {
    expect(sut.toString()).toBe('Flush')
  })
})