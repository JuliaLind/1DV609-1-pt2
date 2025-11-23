import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Game } from '../../src/js/logic/Game.js'

describe('Game', () => {
    const gridMock = vi.fn()
    const ruleSetMock = vi.fn()
    const cardDeckMock = vi.fn()

    it('getNextCard() should retrieve the next card from the deck', () => {
        const expectedCard = {}
        cardDeckMock.drawCard = vi.fn().mockReturnValue(expectedCard)

        const sut = new Game(gridMock, ruleSetMock, cardDeckMock)
        const actualCard = sut.getNextCard()

        expect(actualCard).toBe(expectedCard)
    })
})