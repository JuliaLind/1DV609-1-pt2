import { describe, it, expect } from 'vitest'
import { RoyalFlush } from '../../src/rules/RoyalFlush.js'
import { getAttributeMock } from './lib/helpers.js'

describe('Royal Flush', () => {
  const sut = new RoyalFlush()

  it('getValue should return 100', () => {
    expect(sut.getValue()).toBe(100)
  })

  it('toString should return "Royal Flush"', () => {
    expect(sut.toString()).toBe('Royal Flush')
  })
})