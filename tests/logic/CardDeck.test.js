import { describe, it, expect, vi } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  it('CardDeck constructor should call the CardFactory.createCards method', () => {
    const cardFactoryMock = {
      createCards: vi.fn()
    }
    new CardDeck(cardFactoryMock) // eslint-disable-line no-new

    expect(cardFactoryMock.createCards).toHaveBeenCalledOnce()
  })

  it('The cards should be shuffled in the CardDeck constructor', () => {
    const card1 = { rank: 'A', suite: 'Hearts' }
    const card2 = { rank: 'K', suite: 'Spades' }
    const card3 = { rank: '10', suite: 'Diamonds' }
    const cards = [card1, card2, card3]

    const cardFactoryMock = {
      createCards: vi.fn().mockReturnValue(cards)
    }

    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1) // 0.1 * (2+1) = 0.3 -> card 2 and card 0 swapped [card2, card1, card3]
      .mockReturnValue(0.8) // 0.8 * (1+1) = 1.6 -> card 1 and card 2 swapped [card2, card3, card1]

    const expectedOrder = [card2, card3, card1]

    const sut = new CardDeck(cardFactoryMock)
    expect(sut.cards).toEqual(expectedOrder)
  })
})
