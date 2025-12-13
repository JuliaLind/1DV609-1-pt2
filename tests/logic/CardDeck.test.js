import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { CardDeck } from '../../src/js/logic/CardDeck.js'

describe('CardDeck', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }
  let cardFactoryStub

  beforeEach(() => {
    cardFactoryStub = {
      createCards: vi.fn().mockReturnValue([card1, card2])
    }
  
    vi.spyOn(Math, 'random').mockReturnValue(0.9)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('CardDeck should use the cards created by CardFactory', () => {
    cardFactoryStub.createCards.mockReturnValue([card1, card2])

    const sut = new CardDeck(cardFactoryStub)

    expect(sut.cards).toEqual([card1, card2])
  })

  it('The cards should be shuffled in the CardDeck constructor', () => {
    const originalOrder = [card1, card2, card3]
    cardFactoryStub.createCards.mockReturnValue(originalOrder)

    Math.random.mockClear().mockReturnValue(0.1) // each index will be swapped with card at index 0

    const sut = new CardDeck(cardFactoryStub)
    const expectedOrder = [card2, card3, card1]

    expect(sut.cards).toEqual(expectedOrder)
  })

  it('drawCard should return the top card from the deck', () => {
    cardFactoryStub.createCards.mockReturnValue([card1, card2])

    const sut = new CardDeck(cardFactoryStub)
    const drawnCard = sut.drawCard()

    expect(drawnCard).toEqual(card2)
  })

  it('drawCard should remove the top card from the deck', () => {
    const cards = [card1, card2]

    cardFactoryStub.createCards.mockClear().mockReturnValue(cards)
    const sut = new CardDeck(cardFactoryStub)
    expect(sut.cards).toEqual([card1, card2])
    sut.drawCard()

    expect(sut.cards).toEqual([card1])
  })
})
