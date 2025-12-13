import { describe, it, expect, vi } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
  const cardDeckMock = vi.fn({
    drawCard: vi.fn()
  })

  const card1 = {}

  it('Game.getNextCard() should retrieve the next card from the deck', () => {
    cardDeckMock.drawCard
      .mockClear()
      .mockReturnValueOnce(card1)

    const sut = new Game(cardDeckMock)
    const actualCard = sut.getNextCard()

    expect(actualCard).toBe(card1)
  })
})
