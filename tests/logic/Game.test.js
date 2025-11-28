import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
  const gridMock = vi.fn({
    isFull: vi.fn(),
    getRow: vi.fn(),
    getColumn: vi.fn(),
    placeCard: vi.fn()
  })
  const ruleSetMock = vi.fn(
    {
      evaluate: vi.fn()
    }
  )
  const cardDeckMock = vi.fn({
    drawCard: vi.fn()
  })

  const card1 = {}
  const card2 = {}
  const card3 = {}
  const card4 = {}
  let sut

  beforeEach(() => {
    cardDeckMock.drawCard
      .mockReturnValueOnce(card1)
      .mockReturnValueOnce(card2)
      .mockReturnValueOnce(card3)
      .mockReturnValueOnce(card4)

    sut = new Game(gridMock, ruleSetMock, cardDeckMock)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })


  it('Game.getNextCard() should retrieve the next card from the deck', () => {
    const actualCard = sut.getNextCard()

    expect(actualCard).toBe(card1)
  })

  it('Game.getNextCard() should not draw a new card on each getNextCard() call', () => {
    sut.getNextCard()
    sut.getNextCard()
    expect(cardDeckMock.drawCard).toHaveBeenCalledTimes(1)
  })

  describe('Game.getLineResult()', () => {
    const resultSlots = [
      { direction: 'row', index: 0 },
      { direction: 'row', index: 4 },
      { direction: 'column', index: 0 },
      { direction: 'column', index: 4 }
    ]

    resultSlots.forEach(({ direction, index }) => {
      it(`Should initially return {rule: '', points: 0} for ${direction} ${index}`, () => {
        const expected = { rule: '', points: 0 }
        const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
        const actual = sut.getLineResult(direction, index)
        expect(actual).toEqual(expected)
      })
    })
  })

  describe('Game.isGameOver()', () => {
    it('Should return true if the grid is full', () => {
      gridMock.isFull.mockReturnValue(true)
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      const actual = sut.isGameOver()
      expect(actual).toBe(true)
    })

    it('Should return false if the grid is not full', () => {
      gridMock.isFull.mockReturnValue(false)
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      const actual = sut.isGameOver()
      expect(actual).toBe(false)
    })
  })

  describe('Game.getTotalPoints()', () => {
    it('Should return the sum of all row and column points', () => {
      ruleSetMock.evaluate.mockClear()
      ruleSetMock.evaluate
        .mockReturnValueOnce({ rule: 'Rule1', points: 10 })
        .mockReturnValueOnce({ rule: 'Rule2', points: 5 })
        .mockReturnValueOnce({ rule: 'Rule3', points: 15 })
        .mockReturnValueOnce({ rule: '', points: 0 })

      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)

      sut.placeCardAt(0, 0)
      sut.placeCardAt(1, 1)

      const actual = sut.getTotalPoints()
      const expected = 10 + 5 + 15 + 0

      expect(actual).toBe(expected)
    })
  })
})