import { describe, it, expect, vi } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  it('CardDeck constructor should call the CardFactory.createCards method', () => {
    const cardFactoryMock = {
      createCards: vi.fn().mockReturnValue([])
    }
    new CardDeck(cardFactoryMock) // eslint-disable-line no-new

    expect(cardFactoryMock.createCards).toHaveBeenCalledOnce()
  })

  it('The cards should be shuffled in the CardDeck constructor', () => {
    const card1 = { rank: 'A', suite: 'Hearts' }
    const card2 = { rank: 'K', suite: 'Spades' }
    const card3 = { rank: '10', suite: 'Diamonds' }
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
})
