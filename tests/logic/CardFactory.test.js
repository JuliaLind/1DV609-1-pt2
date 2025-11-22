import { describe, it, expect } from 'vitest'
import { CardFactory } from '../../src/logic/CardFactory.js'
import { Card } from '../../src/logic/Card.js'

describe('CardFactory', () => {
  it('createCard() should create a Card instance with correct attributes', () => {
    const sut = new CardFactory()
    const card = sut.createCard('hearts', 'A')
    
    expect(card.getRank()).toBe('A')
    expect(card.getSuite()).toBe('hearts')
    expect(card).toBeInstanceOf(Card)
  })
})