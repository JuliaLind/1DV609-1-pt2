import { describe, it, expect, vi } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
  const cardDeckMock = vi.fn({
    drawCard: vi.fn()
  })

  const card1 = {}
  const card2 = {}

  it('Game.getNextCard() should retrieve the next card from the deck', () => {
    cardDeckMock.drawCard
      .mockClear()
      .mockReturnValueOnce(card1)

    const sut = new Game(cardDeckMock)
    const actualCard = sut.getNextCard()

    expect(actualCard).toBe(card1)
  })

  it('Game.getNextCard() should not pick a new card from the deck on each call', () => {
    cardDeckMock.drawCard
      .mockClear()
      .mockReturnValueOnce(card1)
      .mockReturnValueOnce(card2)

    const sut = new Game(cardDeckMock)
    const firstCard = sut.getNextCard()
    const secondCard = sut.getNextCard()
    expect(secondCard).toBe(firstCard)
  })
})
