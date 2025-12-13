import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Grid } from '../../src/js/logic/Grid.js'

describe('Grid', () => {
  const card1 = { rank: 'A', suite: 'Hearts' }
  const card2 = { rank: 'K', suite: 'Spades' }
  const card3 = { rank: '10', suite: 'Diamonds' }

  let slots1
  let slots2
  let slots3
  let slots4
  let slots5

  beforeEach(() => {
    slots1 = [undefined, card1, undefined, undefined, undefined]
    slots2 = [undefined, undefined, undefined, undefined, undefined]
    slots3 = [undefined, undefined, card2, undefined, undefined]
    slots4 = [card3, undefined, undefined, undefined, undefined]
    slots5 = [undefined, undefined, undefined, undefined, undefined]
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
})
