import { describe, it, expect } from 'vitest'
import { CardFactory } from '../../src/js/logic/CardFactory.js'
import { Card } from '../../src/js/logic/Card.js'

describe('CardFactory.createCard()', () => {
  it('CardFactory.createCard() should return an instance of Card', () => {
    const sut = new CardFactory()
    const card = sut.createCard('hearts', 'A')

    expect(card).toBeInstanceOf(Card)
  })
})