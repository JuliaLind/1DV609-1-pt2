import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }


  it('CardDeck should use the cards created by CardFactory', () => {
    const cardFactoryStub = {
      createCards: vi.fn().mockReturnValue([card1, card2])
    }
  
    const sut = new CardDeck(cardFactoryStub)

    expect([sut.drawCard(), sut.drawCard()]).toEqual([card2, card1])
  })
})
