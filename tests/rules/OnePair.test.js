import { describe, it, expect } from 'vitest'
import { OnePair } from '../../src/rules/OnePair.js'
import { getAttributeMock } from './lib/helpers.js'


describe('OnePair', () => {
  const sut = new OnePair()

  it('getValue should return 2', () => {
    expect(sut.getValue()).toBe(2)
  })

  it('toString should return "One Pair"', () => {
    expect(sut.toString()).toBe('One Pair')
  })

  describe('test method', () => {
    const twoHearts = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '2' })
    })

    const twoSpades = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '2' })
    })

    const threeHearts = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': '3' })
    })

    const aceHearts = Object.freeze({
      getAttribute: getAttributeMock({ 'rank': 'A' })
    })

    it('test should return true for ranks [2, 3, 2]', () => {
      const actual = sut.test([twoHearts, threeHearts, twoSpades])

      expect(actual).toBe(true)
    })

    it('test should return false for ranks [2, 3, A]', () => {
      const actual = sut.test([twoHearts, threeHearts, aceHearts])

      expect(actual).toBe(false)
    })
  })
})