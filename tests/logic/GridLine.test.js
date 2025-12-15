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

    it('Passing an array with less than 5 slots should throw an error', () => {
      expect(() => new GridLine(new Array(4))).toThrowError()
    })

    it('Passing an array with more than 5 slots should throw an error', () => {
      expect(() => new GridLine(new Array(6))).toThrowError()
    })
  })

  describe('GridLine.placeCard()', () => {
    it('should place a card in the specified slot', () => {
      const slots = [undefined, undefined, card1, card2, card3]
      const sut = new GridLine(slots)

      const card = { rank: 'J', suite: 'Hearts' }
      const index = 1
      sut.placeCard(index, card)

      const expectedSlots = [undefined, card, card1, card2, card3]

      expect(sut.slots).toEqual(expectedSlots)
    })

    const invalidIndexes = [-1, 5]
    invalidIndexes.forEach((invalidIndex) => {
      it(`Placing a card at invalid index: ${invalidIndex}, should not increase the number of slots`, () => {
        const sut = new GridLine()
        const card = {}

        try {
          sut.placeCard(invalidIndex, card)
        } catch {
        } finally {
          expect(sut.slots.length).toBe(5)
        }
      })

      it(`should throw an error when placing a card at invalid index: ${invalidIndex}`, () => {
        const sut = new GridLine()
        const card = {}

        expect(() => sut.placeCard(invalidIndex, card)).toThrowError()
      })
    })

    it('Placing card at occupied position should not replace the card in the slot', () => {
      const slots = [undefined, undefined, card1, undefined, undefined]
      const sut = new GridLine(slots)

      try {
        sut.placeCard(2, card2)
      } catch {
      } finally {
        expect(sut.slots[2]).toEqual(card1)
      }
    })

    it('Placing card at occupied position should throw an error', () => {
      const slots = [undefined, undefined, card1, undefined, undefined]
      const sut = new GridLine(slots)
      expect(() => sut.placeCard(2, card2)).toThrowError()
    })
  })

  describe('GridLine.isFull()', () => {
    it('Should return true if there are no empty slots', () => {
      const slots = [{}, {}, {}, {}, {}]
      const sut = new GridLine(slots)
      expect(sut.isFull()).toBe(true)
    })

    it('Should return false if there is at least one empty slot', () => {
      const slots = [{}, {}, {}, undefined, {}]
      const sut = new GridLine(slots)
      expect(sut.isFull()).toBe(false)
    })
  })

  describe('GridLine.hasRank', () => {
    const ace = { valueOf: vi.fn().mockReturnValue(14) }
    const king = { valueOf: vi.fn().mockReturnValue(13) }
    const ten = { valueOf: vi.fn().mockReturnValue(10) }

    const slots = [undefined, ace, king, ten, undefined]
    const sut = new GridLine(slots)

    it('should return false if no card with the numerical rank value exists in the grid line', () => {
      expect(sut.hasRank(12)).toBe(false)
    })

    it('should return true if a card with the numerical rank value exists in the grid line', () => {
      expect(sut.hasRank(13)).toBe(true)
    })
  })

  describe('GridLine.getRankFrequencies()', () => {
    it('Empty GridLine should return empty rank frequencies object', () => {
      const sut = new GridLine()
      const expected = {}
      expect(sut.getRankFrequencies()).toEqual(expected)
    })
  })
})
