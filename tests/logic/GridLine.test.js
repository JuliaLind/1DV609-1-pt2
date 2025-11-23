import { describe, it, expect, beforeEach } from 'vitest'
import { GridLine } from '../../src/js/logic/GridLine.js'

describe('GridLine', () => {
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

  describe('constructor()', () => {
    it('should create an emtpy grid line with 5 slots', () => {
      const sut = new GridLine()
      expect(sut.getCards()).toEqual([undefined, undefined, undefined, undefined, undefined])
    })

    it('should create a grid line from array with length 5', () => {
      const sut = new GridLine([undefined, undefined, jackHearts, eightClubs, undefined])
      expect(sut.getCards()).toEqual([undefined, undefined, jackHearts, eightClubs, undefined])
    })

    const invalidCollections = [
      [],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [jackHearts, eightClubs]
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
      sut.placeCard(jackHearts, 2)

      expect(sut.getCards()).toEqual([undefined, undefined, jackHearts, undefined, undefined])
    })

    it('placeCard() should throw an error if the slot is already occupied', () => {
      const sut = new GridLine([undefined, undefined, jackHearts, undefined, undefined])

      expect(() => sut.placeCard(eightHearts, 2)).toThrowError('Slot is not empty')
    })

    // boundary values 0 and 4 + adjacent values -1, 5
    const validSlots = [0, 4]
    const invalidSlots = [-1, 5]

    validSlots.forEach((slot) => {
      it(`should place a card at valid slot ${slot}`, () => {
        const sut = new GridLine()
        sut.placeCard(eightHearts, slot)
        expect(sut.getCard(slot)).toBe(eightHearts)
      })
    })

    invalidSlots.forEach((slot) => {
      it(`should throw an error when placing a card at invalid slot ${slot}`, () => {
        const sut = new GridLine()
        expect(() => sut.placeCard(eightHearts, slot)).toThrowError('Slot index out of bounds')
      })
    })
  })

  describe('GridLine with  [,,J♥,,]', () => {
    let sut

    beforeEach(() => {
      sut = new GridLine([undefined, undefined, jackHearts, undefined, undefined])
    })

    it('hasEmptySlots() should return true for collection with empty slots', () => {
      expect(sut.hasEmptySlots()).toBe(true)
    })

    it('getCard(2) should return the card at position 2', () => {
      expect(sut.getCard(2)).toBe(jackHearts)
    })

    it('hasRank("J") should return true for collection [,,J♥,,]', () => {
      expect(sut.hasRank('J')).toBe(true)
    })

    it('hasRank("A") should return false for collection [,,J♥,,]', () => {
      expect(sut.hasRank('A')).toBe(false)
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

    it('getRanks() should return {"J": 1, "8": 2}', () => {
      expect(sut.getRanks()).toEqual({ 'J': 1, '8': 2 })
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