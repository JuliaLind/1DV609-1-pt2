import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CardDeck } from '../../src/logic/CardDeck.js'
import seedrandom from 'seedrandom'

describe('CardDeck', () => {
  it('Constructor should initialize with 52 unique cards', () => {
    const sut = new CardDeck()
    const cards = []

    while (true) {
      try {
        cards.push(sut.drawCard())
      } catch (error) {
        break
      }
    }

    expect(cards.length).toBe(52)
  })

  it('The cards should be in random order', () => {
    const rng = seedrandom('seed-random-for-fixed-order')
    vi.spyOn(Math, 'random').mockImplementation(() => rng())
    
    const sut = new CardDeck()
    const card1 = sut.drawCard()
    const card2 = sut.drawCard()
    const card3 = sut.drawCard()
    expect(card1.getAttribute('rank')).toBe('7')
    expect(card1.getAttribute('suite')).toBe('spades')
    expect(card2.getAttribute('rank')).toBe('2')
    expect(card2.getAttribute('suite')).toBe('diamonds')
  })
})
