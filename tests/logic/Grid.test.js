import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Grid } from '../../src/logic/Grid.js'
import { getAttributeMock } from '../lib/helpers.js'
import { GridLine } from '../../src/logic/GridLine.js'

describe('GridLine', () => {
  const eightHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': '8', 'suit': 'hearts' }),
    valueOf: () => 8
  })

  const eightClubs = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': '8', 'suit': 'clubs' }),
    valueOf: () => 8
  })

  const jackHearts = Object.freeze({
    getAttribute: getAttributeMock({ 'rank': 'J', 'suit': 'hearts' }),
    valueOf: () => 11
  })

  let row1
  let row2
  let row3
  let row4
  let row5
  let sut

  beforeEach(() => {
    row1 = vi.fn()
    row2 = vi.fn()
    row3 = vi.fn()
    row4 = vi.fn()
    row5 = vi.fn()

    sut = new Grid(
      [row1, row2, row3, row4, row5]
    )
  })

  it('addCard() should add a card to the correct row', () => {
    row1.addCard = vi.fn()
    row2.addCard = vi.fn()
    row3.addCard = vi.fn()
    row4.addCard = vi.fn()
    row5.addCard = vi.fn()

    sut.addCard(eightHearts, 2, 1)

    expect(row1.addCard).not.toHaveBeenCalled()
    expect(row2.addCard).not.toHaveBeenCalled()
    expect(row3.addCard).toHaveBeenCalledWith(eightHearts, 1)
    expect(row4.addCard).not.toHaveBeenCalled()
    expect(row5.addCard).not.toHaveBeenCalled()
  })

  it('getRow() should return a GridLine with cards from the correct row', () => {
    row1.getCards = vi.fn()
    row2.getCards = vi.fn()
    row3.getCards = vi.fn()
    row4.getCards = vi.fn().mockReturnValue([undefined, jackHearts, eightHearts, undefined, undefined])
    row5.getCards = vi.fn()

    const actual = sut.getRow(3)

    expect(row1.getCards).not.toHaveBeenCalled()
    expect(row2.getCards).not.toHaveBeenCalled()
    expect(row3.getCards).not.toHaveBeenCalled()
    expect(row4.getCards).toHaveBeenCalled()
    expect(row5.getCards).not.toHaveBeenCalled()
    expect(actual).toBeInstanceOf(GridLine)
    expect(actual.getCards()).toEqual([undefined, jackHearts, eightHearts, undefined, undefined])
    expect(actual).not.toBe(row4)
  })

  it('getColumn() should return a GridLine with cards from the correct column', () => {
    row1.getCard = vi.fn().mockImplementation((column) => {
      if (column === 3) {
        return eightClubs
      }
      return undefined
    })

    row2.getCard = vi.fn()
    row3.getCard = vi.fn()
    row4.getCard = vi.fn().mockImplementation((column) => {
      if (column === 1) {
        return eightHearts
      }

      if (column === 3) {
        return jackHearts
      }

      return undefined
    })

    row5.getCard = vi.fn()

    const actual = sut.getColumn(3)

    expect(row1.getCard).toHaveBeenCalledWith(3)
    expect(row2.getCard).toHaveBeenCalledWith(3)
    expect(row3.getCard).toHaveBeenCalledWith(3)
    expect(row4.getCard).toHaveBeenCalledWith(3)
    expect(row5.getCard).toHaveBeenCalledWith(3)
    expect(actual).toBeInstanceOf(GridLine)
    expect(actual.getCards()).toEqual([eightClubs, undefined, undefined, jackHearts, undefined])
  })
})