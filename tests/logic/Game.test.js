import { describe, it, expect, vi } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
  const cardDeckMock = vi.fn({
    drawCard: vi.fn()
  })

  const card1 = {}
  const card2 = {}

  const gridMock = vi.fn({
    isFull: vi.fn(),
    getRow: vi.fn(),
    getColumn: vi.fn(),
    placeCard: vi.fn()
  })

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

  it('Game.getResult() should return { name: "", points: 0 } as default value', () => {
    const sut = new Game(cardDeckMock)
    const expected = { name: '', points: 0 }
    const actual = sut.getResult('row', 2)

    expect(actual).toEqual(expected)
  })

  it(`Game.isOver() should return true if the grid isFull() returns true`, () => {
    gridMock.isFull.mockReturnValue(true)

    const sut = new Game(cardDeckMock, gridMock)

    const actual = sut.isOver()

    expect(actual).toBe(true)
  })
})
