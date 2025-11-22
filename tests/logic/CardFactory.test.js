import { describe, it, expect } from 'vitest'
import { CardFactory } from '../../src/logic/CardFactory.js'

describe('CardFactory', () => {
  it('createCard() should create a poker-card element with correct attributes', () => {
    const sut = new CardFactory()
    const card = sut.createCard('hearts', 'A')
    expect(card.tagName.toLowerCase()).toBe('poker-card')
    expect(card.getAttribute('suite')).toBe('hearts')
    expect(card.getAttribute('rank')).toBe('A')
  })
})