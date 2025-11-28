import { describe, it, expect, beforeEach } from 'vitest'
import { GridLine } from '../../src/js/logic/GridLine.js'

describe('GridLine', () => {
  const card1 = {}
  const card2 = {}
  const card3 = {}
  const card4 = {}
  const card5 = {}

  describe('constructor()', () => {
    it('should create an emtpy grid line with 5 slots', () => {
      const sut = new GridLine()
      expect(sut.getCards()).toEqual([undefined, undefined, undefined, undefined, undefined])
    })

    it('should create a grid line from array with length 5', () => {
      const sut = new GridLine([undefined, undefined, card1, card2, undefined])
      expect(sut.getCards()).toEqual([undefined, undefined, card1, card2, undefined])
    })

    const invalidCollections = [
      [],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [card1, card2]
    ]

    invalidCollections.forEach((collection) => {
      it(`should throw an error when creating a grid line with invalid length ${collection.length}`, () => {
        expect(() => new GridLine(collection)).toThrowError('GridLine must have exactly 5 slots')
      })
    })
  })

  describe('placeCard()', () => {
    it('placeCard() should place a card at the specified position if the slot is empty', () => {
      const sut = new GridLine()
      sut.placeCard(card1, 2)

      expect(sut.getCards()).toEqual([undefined, undefined, card1, undefined, undefined])
    })

    it('placeCard() should throw an error if the slot is already occupied', () => {
      const sut = new GridLine([undefined, undefined, card1, undefined, undefined])
      expect(() => sut.placeCard(card2, 2)).toThrowError('Slot is not empty')
    })

    // boundary values 0 and 4 + adjacent values -1, 5
    const validSlots = [0, 4]
    const invalidSlots = [-1, 5]

    validSlots.forEach((slot) => {
      it(`should place a card at valid slot ${slot}`, () => {
        const sut = new GridLine()
        sut.placeCard(card1, slot)
        expect(sut.getCard(slot)).toBe(card1)
      })
    })

    invalidSlots.forEach((slot) => {
      it(`should throw an error when placing a card at invalid slot ${slot}`, () => {
        const sut = new GridLine()
        expect(() => sut.placeCard(card1, slot)).toThrowError('Slot index out of bounds')
      })
    })
  })

  describe('hasEmptySlots()', () => {
    it('hasEmptySlots() should return true for collection with one empty slot', () => {
      const sut = new GridLine([card1, card2, undefined, card3, card4])
      expect(sut.hasEmptySlots()).toBe(true)
    })

    it('hasEmptySlots() should return false for full collection', () => {
      const sut = new GridLine([card1, card2, card3, card4, card5])
      expect(sut.hasEmptySlots()).toBe(false)
    })

    it('hasEmptySlots() should return true for empty collection', () => {
      const sut = new GridLine()
      expect(sut.hasEmptySlots()).toBe(true)
    })
  })

  describe('getCard()', () => {
    const invalidSlots = [-1, 5]

    invalidSlots.forEach((slot) => {
      it(`getCard() should throw an error when accessing invalid slot ${slot}`, () => {
        const sut = new GridLine()
        expect(() => sut.getCard(slot)).toThrowError('Slot index out of bounds')
      })

      it('getCard(2) should return the card at position 2 for [,,card,,]', () => {
        const sut = new GridLine([undefined, undefined, card1, undefined, undefined])

        expect(sut.getCard(2)).toBe(card1)
      })

      it('getCard(1) should throw an error when accessing empty slot 1 for [,,card,,]', () => {
        const sut = new GridLine([undefined, undefined, card1, undefined, undefined])
        expect(() => sut.getCard(1)).toThrowError('Slot is empty')
      })
    })
  })
  const eightHearts = Object.freeze({
    getRank: () => '8',
    getSuite: () => 'hearts',
    valueOf: () => 8
  })

  const eightClubs = Object.freeze({
    getRank: () => '8',
    getSuite: () => 'clubs',
    valueOf: () => 8
  })

  const jackHearts = Object.freeze({
    getRank: () => 'J',
    getSuite: () => 'hearts',
    valueOf: () => 11
  })

  describe('hasRank() for collection [,,J♥,,]', () => {
    const parameters = [
      { rank: 'J', expectedResult: true },
      { rank: 'A', expectedResult: false }
    ]

    parameters.forEach(({ rank, expectedResult }) => {
      it(`hasRank("${rank}") should return ${expectedResult}`, () => {
        const sut = new GridLine([undefined, undefined, jackHearts, undefined, undefined])
        expect(sut.hasRank(rank)).toBe(expectedResult)
      })
    })
  })

  describe('GridLine with [,J♥,,8♥,8♣]', () => {
    let sut

    beforeEach(() => {
      sut = new GridLine([undefined, jackHearts, undefined, eightHearts, eightClubs])
    })

    it('getDistinctValues() should return [8,11]', () => {
      expect(sut.getDistinctValues()).toEqual([8, 11])
    })

    it('getRankFrequencies() should return {"J": 1, "8": 2}', () => {
      expect(sut.getRankFrequencies()).toEqual({ 'J': 1, '8': 2 })
    })
  })

  describe('isSameSuite()', () => {
    it('should return true for cards [8♥, J♥, 8♥]', () => {
      const sut = new GridLine([eightHearts, jackHearts, eightHearts, undefined, undefined])

      expect(sut.isSameSuite()).toBe(true)
    })

    it('should return false for cards [8♥, J♥, 8♣]', () => {
      const sut = new GridLine([eightHearts, jackHearts, eightClubs, undefined, undefined])

      expect(sut.isSameSuite()).toBe(false)
    })

    it('should return true for empty GridLine', () => {
      const sut = new GridLine()
      expect(sut.isSameSuite()).toBe(true)
    })
  })
})