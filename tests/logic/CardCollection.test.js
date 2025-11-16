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

    it ('getDistinctValues() should return [8,11]', () => {
      expect(sut.getDistinctValues()).toEqual([8,11])
    })
  })
})