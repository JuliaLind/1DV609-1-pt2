import { describe, it, expect, vi, beforeAll, afterAll, afterEach } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }

  afterEach(() => {
    vi.restoreAllMocks()
  })


  it('CardDeck should use the cards created by CardFactory', () => {
    const cardFactoryStub = {
      createCards: vi.fn().mockReturnValue([card1, card2])
    }

    vi.spyOn(Math, 'random')
      .mockReturnValue(0.9)

    const sut = new CardDeck(cardFactoryStub)

    expect(sut.cards).toEqual([card1, card2])
  })

  it('The cards should be shuffled in the CardDeck constructor', () => {
    const originalOrder = [card1, card2, card3]

    const cardFactoryStub = {
      createCards: vi.fn().mockReturnValue(originalOrder)
    }

    vi.spyOn(Math, 'random')
      .mockReturnValue(0.1) // each index will be swapped with card at index 0

    const sut = new CardDeck(cardFactoryStub)
    const expectedOrder = [card2, card3, card1]

    expect(sut.cards).toEqual(expectedOrder)
  })
})
