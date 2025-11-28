import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game.placeCardAt()', () => {
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


  beforeEach(() => {
    cardDeckMock.drawCard
      .mockReturnValueOnce(card1)
      .mockReturnValueOnce(card2)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Should draw a new card after placing the current card', () => {
    const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
    sut.placeCardAt(1, 3)
    expect(cardDeckMock.drawCard).toHaveBeenCalledTimes(2)
    const actualCard = sut.getNextCard()
    expect(actualCard).toBe(card2)
  })

  it('Game.placeCardAt() should place the current card on the grid at specified position', () => {
    const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
    sut.placeCardAt(1, 3)
    expect(gridMock.placeCard).toHaveBeenCalledWith(card1, 1, 3)
  })


  it('Game.placeCardAt() should evaluate and store the result for the affected row and column', () => {
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

  describe('Should update results after placing a card', () => {
    const firstRowResult = { rule: 'First row rule', points: 10 }
    const secondRowResult = { rule: 'Second row rule', points: 20 }
    const firstColumnResult = { rule: 'First column rule', points: 5 }
    const secondColumnResult = { rule: 'Second column rule', points: 15 }


    beforeEach(() => {
      ruleSetMock.evaluate
        .mockClear()
        .mockReturnValueOnce(firstRowResult)
        .mockReturnValueOnce(firstColumnResult)
        .mockReturnValueOnce(secondRowResult)
        .mockReturnValueOnce(secondColumnResult)

      cardDeckMock.drawCard.mockClear()
        .mockReturnValue({})
    })

    it('Should overwrite previous results for the same row', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      sut.placeCardAt(2, 2)
      sut.placeCardAt(2, 3)
      expect(sut.getLineResult('row', 2)).toEqual(secondRowResult)
    })


    it('Should not overwrite previous results for different row', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      sut.placeCardAt(2, 2)
      sut.placeCardAt(3, 2)
      expect(sut.getLineResult('row', 2)).toEqual(firstRowResult)

    })

    it('Should overwrite previous results for the same column', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      sut.placeCardAt(2, 2)
      sut.placeCardAt(3, 2)

      expect(sut.getLineResult('column', 2)).toEqual(secondColumnResult)
    })

    it('Should overwrite previous results for the different column', () => {
      const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
      sut.placeCardAt(2, 2)
      sut.placeCardAt(2, 3)

      expect(sut.getLineResult('column', 2)).toEqual(firstColumnResult)
    })
  })
})