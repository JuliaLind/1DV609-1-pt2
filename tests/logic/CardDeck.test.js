import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }

  it('CardDeck constructor should call the CardFactory.createCards method', () => {
    const cardFactoryMock = {
      createCards: vi.fn().mockReturnValue([])
    }
    new CardDeck(cardFactoryMock) // eslint-disable-line no-new

    expect(cardFactoryMock.createCards).toHaveBeenCalledOnce()
  })

  it('The cards should be shuffled in the CardDeck constructor', () => {
    const originalOrder = [card1, card2, card3]

    const cardFactoryMock = {
      createCards: vi.fn().mockReturnValue(originalOrder)
    }

    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2)

    const sut = new CardDeck(cardFactoryMock)
    const expectedOrder = [card2, card3, card1]

    expect(sut.cards).toEqual(expectedOrder)
  })

  describe('CardDeck.drawCard', () => {
    const cardFactoryMock = {
      createCards: vi.fn()
    }

    beforeEach(() => {
      vi.spyOn(Math, 'random')
        .mockClear()
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.8)
    })

    afterAll(() => {
      vi.restoreAllMocks()
    })

    it('drawCard should return the top card from the deck', () => {
      const cards = [card1, card2]

      cardFactoryMock.createCards.mockClear().mockReturnValue(cards)

      const sut = new CardDeck(cardFactoryMock)
      const drawnCard = sut.drawCard()

      expect(drawnCard).toEqual(card2)
    })

    it('drawCard should remove the top card from the deck', () => {
      const cards = [card1, card2]

      cardFactoryMock.createCards.mockClear().mockReturnValue(cards)
      const sut = new CardDeck(cardFactoryMock)
      expect(sut.cards).toEqual([card1, card2])
      sut.drawCard()

      expect(sut.cards).toEqual([card1])
    })
  })
})
