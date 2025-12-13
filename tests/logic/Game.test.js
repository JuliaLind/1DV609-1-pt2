import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
  const cardDeckMock = vi.fn({
    drawCard: vi.fn()
  })

  const card1 = {
    suite: 'Hearts',
    rank: 'A'
  }
  const card2 = {
    suite: 'Spades',
    rank: 'K'
  }

  const gridMock = vi.fn({
    isFull: vi.fn(),
    getRow: vi.fn(),
    getColumn: vi.fn(),
    placeCard: vi.fn()
  })

  beforeEach(() => {
    cardDeckMock.drawCard
      .mockClear()
      .mockReturnValueOnce(card1)
      .mockReturnValueOnce(card2)
  })

  afterEach(() => {
    vi.clearAllMocks() // clears call history
    vi.resetAllMocks() // removes mocked return values
  })

  it('Game.getNextCard() should retrieve the next card from the deck', () => {
    const sut = new Game(cardDeckMock)
    const actualCard = sut.getNextCard()

    expect(actualCard).toBe(card1)
  })

  it('Game.getNextCard() should not pick a new card from the deck on each call', () => {
    const sut = new Game(cardDeckMock)
    const firstCard = sut.getNextCard()
    const secondCard = sut.getNextCard()
    expect(secondCard).toBe(firstCard)
  })

  it('After placeCardAt() has been called the next card should be picked from the deck', () => {
    const sut = new Game(cardDeckMock, gridMock)

    const rowIndex = 1
    const columnIndex = 3

    sut.placeCardAt(rowIndex, columnIndex)
    expect(sut.getNextCard()).toBe(card2)
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

  it(`Game.isOver() should return false if the grid isFull() returns false`, () => {
    gridMock.isFull.mockReturnValue(false)

    const sut = new Game(cardDeckMock, gridMock)

    const actual = sut.isOver()

    expect(actual).toBe(false)
  })
})
