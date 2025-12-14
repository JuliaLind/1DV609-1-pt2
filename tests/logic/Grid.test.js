import { describe, it, expect, beforeEach, vi } from 'vitest'

import { Grid } from '../../src/js/logic/Grid.js'

/**
 * Creates a GridLine stub.
 *
 * @param {Array} slotArray - slots of the GridLine
 * @returns {object} - the grid line stub
 */
function createGridLineStub(slotArray) {
  const slots = slotArray || new Array(5)
  return { slots }
}

vi.mock('../../src/js/logic/GridLine.js', () => {
  // must be a regular function, arrow function will not work wig "new"
  // and give error message "bla bla is not a constructor"
  /**
   * Constructor function that is sclled when new GridLine() is called and
   * returns a GridLine stub.
   *
   * @param {Array} slotArray - a array with card slots
   * @returns { object } - a GridLine stub
   */
  function GridLine(slotArray) {
    return createGridLineStub(slotArray)
  }

  return { GridLine }
})

describe('Grid', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }

  let slots0
  let slots1
  let slots2
  let slots3
  let slots4

  beforeEach(() => {
    slots0 = [undefined, card1, undefined, undefined, undefined]
    slots1 = [undefined, undefined, undefined, undefined, undefined]
    slots2 = [undefined, undefined, card2, undefined, undefined]
    slots3 = [card3, undefined, undefined, undefined, undefined]
    slots4 = [undefined, undefined, undefined, undefined, undefined]
  })

  it('constructor should throw error if less than 5 rows are passed into constructor', () => {
    const fourRows = [{}, {}, {}, {}]

    expect(() => new Grid(fourRows)).toThrowError()
  })

  it('constructor should throw error if more than 5 rows are passed into constructor', () => {
    const sixRows = [{}, {}, {}, {}, {}, {}]

    expect(() => new Grid(sixRows)).toThrowError()
  })

  it('constructor should not throw error if exactly 5 rows are passed into constructor', () => {
    const fiveRows = [{}, {}, {}, {}, {}]

    expect(() => new Grid(fiveRows)).not.toThrowError()
  })

  it('constructor should not throw error if now rows are passed into constructor', () => {
    expect(() => new Grid()).not.toThrowError()
  })

  it('getRow(index) should return the row on the specified index', () => {
    const sut = new Grid([
      { slots: slots0 },
      { slots: slots1 },
      { slots: slots2 },
      { slots: slots3 },
      { slots: slots4 }
    ])
    const actual = sut.getRow(2).slots

    expect(actual).toEqual(slots2)
  })

  it('getColumn(index) should return the column on the specified index', () => {
    const sut = new Grid([
      { slots: slots0 },
      { slots: slots1 },
      { slots: slots2 },
      { slots: slots3 },
      { slots: slots4 }
    ])

    const expected = [slots0[2], slots1[2], slots2[2], slots3[2], slots4[2]]
    const actual = sut.getColumn(2).slots
    expect(actual).toEqual(expected)
  })

  describe('isFull()', () => {
    const row1Stub = {
      hasEmptySlots: vi.fn().mockReturnValue(false)
    }

    const row2Stub = {
      hasEmptySlots: vi.fn().mockReturnValue(false)
    }

    const row3Stub = {
      hasEmptySlots: vi.fn().mockReturnValue(false)
    }

    const row4Stub = {
      hasEmptySlots: vi.fn()
    }

    const row5Stub = {
      hasEmptySlots: vi.fn().mockReturnValue(false)
    }

    it('should return true when all slots are filled', () => {
      row4Stub.hasEmptySlots.mockReturnValueOnce(false)

      const sut = new Grid([row1Stub, row2Stub, row3Stub, row4Stub, row5Stub])

      expect(sut.isFull()).toBe(true)
    })
  })
})
