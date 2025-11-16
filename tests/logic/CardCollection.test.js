import { describe, it, expect } from 'vitest'
import { CardCollection } from '../../src/rules/CardCollection.js'
import { getAttributeMock } from './lib/helpers.js'

describe('CardCollection', () => {
  const jackHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': 'J', 'suit': 'hearts' }),
    getValue: () => 11
  })

  it('hasEmptySlots() should return true for collection with empty slots', () => {
    const sut = new CardCollection(5)

    sut.addCard(jackHearts, 2)

    expect(sut.hasEmptySlots()).toBe(true)
  })

  it('addCard() should add a card at the specified position', () => {
    const sut = new CardCollection(5)
    sut.addCard(jackHearts, 2)

    expect(sut.getCards()).toEqual([undefined, undefined, jackHearts, undefined, undefined])
  })

  it('getCard(2) should return the card at position 2', () => {
    const sut = new CardCollection(5)

    sut.addCard(jackHearts, 2)

    expect(sut.getCard(2)).toBe(jackHearts)
  })
})