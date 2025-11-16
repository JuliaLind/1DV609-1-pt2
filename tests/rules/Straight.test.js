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

  describe('test()', () => {
    const threeHearts = Object.freeze({
      getValue: () => 3
    })


    const eightClubs = Object.freeze({
      getValue: () => 8
    })

    const nineDiamonds = Object.freeze({
      getValue: () => 9
    })

    const tenSpades = Object.freeze({
      getValue: () => 10
    })

    const jackHearts = Object.freeze({
      getValue: () => 11
    })

    const queenClubs = Object.freeze({
      getValue: () => 12
    })

    it('should return true for ranks [Q, 10, J, 8, 9]', () => {
        const actual = sut.test([queenClubs, tenSpades, jackHearts, eightClubs, nineDiamonds])
        expect(actual).toBe(true)
    })

    it('should return false for ranks [3, 10, J, 8, 9]', () => {
        const actual = sut.test([threeHearts, tenSpades, jackHearts, eightClubs, nineDiamonds])
        expect(actual).toBe(false)
    })

    it('should return false for ranks [Q, 10, J, 9]', () => {
        const actual = sut.test([queenClubs, tenSpades, jackHearts, nineDiamonds, undefined])
        expect(actual).toBe(false)
    })
  })
})