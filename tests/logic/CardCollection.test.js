import { describe, it, expect } from 'vitest'
import { CardCollection } from '../../src/logic/CardCollection.js'
import { getAttributeMock } from '../lib/helpers.js'

describe('CardCollection', () => {
  const jackHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': 'J', 'suit': 'hearts' }),
    getValue: () => 11
  })

  it('addCard() should add a card at the specified position', () => {
    const sut = new CardCollection(5)
    sut.addCard(jackHearts, 2)

    expect(sut.getCards()).toEqual([undefined, undefined, jackHearts, undefined, undefined])
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
})