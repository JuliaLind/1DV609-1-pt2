import { describe, it, expect, vi } from 'vitest'
import { GridLine } from '../../src/js/logic/GridLine.js'

describe('GridLine', () => {
  it('GridLine should have exactly 5 slots', () => {
    const sut = new GridLine()

    expect(sut.slots.length).toBe(5)
  })
})
