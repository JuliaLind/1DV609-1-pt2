import { describe, it, expect } from 'vitest'
import { CardFactory } from '../../src/js/logic/CardFactory.js'

describe('CardFactory', () => {
  it('CardFactory.createCards() should create 52 cards', () => {
    const sut = new CardFactory()
    const cards = sut.createCards()

    expect(cards.length).toBe(52)
  })
})
