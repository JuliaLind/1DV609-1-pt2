import { describe, it, expect, vi } from 'vitest'
import { GridLine } from '../../src/js/logic/GridLine.js'

describe('GridLine', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }

  it('GridLine should have exactly 5 slots', () => {
    const sut = new GridLine()

    expect(sut.slots.length).toBe(5)
  })

  describe('GridLine from array', () => {
    it('should create a GridLine with the given array of cards', () => {
      const slots = [card1, undefined, card2, card3, undefined]
      const sut = new GridLine(slots)

      expect(sut.slots).toEqual(slots)
    })
  })
})
