import { describe, it, expect } from 'vitest'
import { GridLine } from '../../src/js/logic/GridLine.js'

describe('GridLine', () => {
  it('GridLine should have exactly 5 slots', () => {
    const sut = new GridLine()

    expect(sut.slots.length).toBe(5)
  })

  describe('GridLine from array', () => {
    const card1 = { rank: 'A', suite: 'Hearts' }
    const card2 = { rank: 'K', suite: 'Spades' }
    const card3 = { rank: '10', suite: 'Diamonds' }

    it('should create a GridLine with the given array of cards', () => {
      const slots = [card1, undefined, card2, card3, undefined]
      const sut = new GridLine(slots)

      expect(sut.slots).toEqual(slots)
    })

    it('modifying the returned slots array should not affect the slots inside GridLine', () => {
      const slots = [card1, undefined, card2, card3, undefined]
      const sut = new GridLine(slots)

      const returnedSlots = sut.slots
      returnedSlots[0] = { rank: '2', suite: 'Clubs' }
      expect(sut.slots[0]).toEqual(card1)
    })

    it('modifying the slots array passed into constructor should not affect the slots inside GridLine', () => {
      const slots = [card1, undefined, card2, card3, undefined]
      const sut = new GridLine(slots)

      slots[0] = { rank: '2', suite: 'Clubs' }
    
      expect(sut.slots[0]).toEqual(card1)
    })
  })
})
