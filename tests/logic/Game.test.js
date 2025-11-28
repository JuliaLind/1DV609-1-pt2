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

  beforeEach(() => {
    const cards = [card4, card3, card2, card1]
    cardDeckMock.drawCard.mockImplementation(() => cards.pop())
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Game.getNextCard()', () => {
    it('Should retrieve the next card from the deck', () => {
      const expectedCard = {}
      cardDeckMock.drawCard.mockReturnValue(expectedCard)

      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      const actualCard = sut.getNextCard()

      expect(actualCard).toBe(expectedCard)
    })

    it('Should not draw a new card on each getNextCard() call', () => {

      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)

      sut.getNextCard()
      sut.getNextCard()
      expect(cardDeckMock.drawCard).toHaveBeenCalledTimes(1)
    })
  })

  describe('Game.placeCardAt()', () => {
    it('Should draw a new card after placing the current card', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)

      sut.placeCardAt(1, 3)
      expect(cardDeckMock.drawCard).toHaveBeenCalledTimes(2)
      const actualCard = sut.getNextCard()
      expect(actualCard).toBe(card2)
    })

    it('Should place the current card on the grid at specified position', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)

      sut.placeCardAt(1, 3)
      expect(gridMock.placeCard).toHaveBeenCalledWith(card1, 1, 3)
    })

    it('Should evaluate and store the result for the affected row and column', () => {
      const expectedRowResult = { rule: 'SomeRule', points: 10 }
      const expectedColumnResult = { rule: 'AnotherRule', points: 5 }
      ruleSetMock.evaluate
        .mockReturnValueOnce(expectedRowResult)
        .mockReturnValueOnce(expectedColumnResult)
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)

      sut.placeCardAt(1, 3)
      expect(sut.getLineResult('row', 1)).toEqual(expectedRowResult)
      expect(sut.getLineResult('column', 3)).toEqual(expectedColumnResult)
    })

    describe('Should overwrite previous results', () => {
      const firstRowResult = { rule: 'First row rule', points: 10 }
      const secondRowResult = { rule: 'Second row rule', points: 20 }
      const firstColumnResult = { rule: 'First column rule', points: 5 }
      const secondColumnResult = { rule: 'Second column rule', points: 15 }
      let sut

      beforeEach(() => {
        ruleSetMock.evaluate
          .mockReturnValueOnce(firstRowResult)
          .mockReturnValueOnce(firstColumnResult)
          .mockReturnValueOnce(secondRowResult)
          .mockReturnValueOnce(secondColumnResult)

        sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      })

      afterEach(() => {
        vi.clearAllMocks()
      })

      it('Should overwrite previous results for the same row', () => {
        sut.placeCardAt(2, 2)
        sut.placeCardAt(2, 3)
        expect(sut.getLineResult('row', 2)).toEqual(secondRowResult)
      })


      it('Should not overwrite previous results for different row', () => {
        sut.placeCardAt(2, 2)
        sut.placeCardAt(3, 2)
        expect(sut.getLineResult('row', 2)).toEqual(firstRowResult)

      })

      it('Should overwrite previous results for the same column', () => {
        sut.placeCardAt(2, 2)
        sut.placeCardAt(3, 2)

        expect(sut.getLineResult('column', 2)).toEqual(secondColumnResult)
      })

      it('Should overwrite previous results for the different column', () => {
        sut.placeCardAt(2, 2)
        sut.placeCardAt(2, 3)

        expect(sut.getLineResult('column', 2)).toEqual(firstColumnResult)
      })
    })
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