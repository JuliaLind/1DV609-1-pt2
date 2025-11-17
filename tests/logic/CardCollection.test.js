import { describe, it, expect, beforeEach } from 'vitest'
import { CardCollection } from '../../src/logic/CardCollection.js'
import { getAttributeMock } from '../lib/helpers.js'

describe('CardCollection', () => {
  const eightHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': '8', 'suit': 'hearts' }),
    getValue: () => 8
  })

  const eightClubs = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': '8', 'suit': 'clubs' }),
    getValue: () => 8
  })

  const jackHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': 'J', 'suit': 'hearts' }),
    getValue: () => 11
  })

  describe('addCard()', () => {
    it('addCard() should add a card at the specified position if the slot is empty', () => {
      const sut = new CardCollection(5)
      sut.addCard(jackHearts, 2)

      expect(sut.getCards()).toEqual([undefined, undefined, jackHearts, undefined, undefined])
    })

    it('addCard() should throw an error if the slot is already occupied', () => {
      const sut = new CardCollection(5)
      sut.addCard(jackHearts, 2)

      expect(() => sut.addCard(eightHearts, 2)).toThrowError('Slot is not empty')
    })

    // boundary values 0 and 4 + adjacent values -1, 1, 3, 5
    const validSlots = [0, 1, 3, 4]
    const invalidSlots = [-1, 5]

    validSlots.forEach((slot) => {
      it(`should add a card at valid slot ${slot}`, () => {
        const sut = new CardCollection(5)
        sut.addCard(eightHearts, slot)
        expect(sut.getCard(slot)).toBe(eightHearts)
      })
    })

    invalidSlots.forEach((slot) => {
      it(`should throw an error when adding a card at invalid slot ${slot}`, () => {
        const sut = new CardCollection(5)
        expect(() => sut.addCard(eightHearts, slot)).toThrowError('Slot index out of bounds')
      })
    })
  })

  describe('CardCollection with  [,,J♥,,]', () => {
    let sut

    beforeEach(() => {
      sut = new CardCollection(5)
      sut.addCard(jackHearts, 2)
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

  describe('CardCollection with [,J♥,,8♥,8♣]', () => {
    let sut

    beforeEach(() => {
      sut = new CardCollection(5)
      sut.addCard(jackHearts, 1)
      sut.addCard(eightHearts, 3)
      sut.addCard(eightClubs, 4)
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
      const sut = new CardCollection(3)
      sut.addCard(eightHearts, 0)
      sut.addCard(jackHearts, 1)
      sut.addCard(eightHearts, 2)
      expect(sut.isSameSuite()).toBe(true)
    })

    it('should return false for cards [8♥, J♥, 8♣]', () => {
      const sut = new CardCollection(3)
      sut.addCard(eightHearts, 0)
      sut.addCard(jackHearts, 1)
      sut.addCard(eightClubs, 2)
      expect(sut.isSameSuite()).toBe(false)
    })

    it('should return true for empty CardCollection', () => {
      const sut = new CardCollection(3)
      expect(sut.isSameSuite()).toBe(true)
    })
  })
})