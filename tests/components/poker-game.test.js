import { describe, it, expect, beforeAll, vi, beforeEach, afterEach } from 'vitest'
import '../../src/js/components/poker-game'
import { Game } from '../../src/js/logic/Game.js'

vi.mock('../../src/js/logic/Game.js', () => {
  return {
    Game: vi.fn()
  }
})

describe('poker-game', () => {
  const firstCardStub = {
    suite: 'Hearts',
    rank: 'A'
  }

  const secondCardStub = {
    suite: 'Spades',
    rank: '10'
  }

  const gameMock = {
    getNextCard: vi.fn(),
    placeCardAt: vi.fn(),
    getResult: vi.fn()
  }

  beforeAll(() => {
    Game.mockImplementation(function () {
      return gameMock
    })
  })

  it('poker-game should be defined as a custom element', () => {
    expect(customElements.get('poker-game')).toBeDefined()
  })

  it('Next card slot should display the next card from the game', () => {
    gameMock.getNextCard
      .mockReset()
      .mockReturnValue(firstCardStub)

    const pokerGame = document.createElement('poker-game')
    document.body.appendChild(pokerGame)

    const nextCard = pokerGame.shadowRoot.querySelector('#next-card poker-card[suite="Hearts"][rank="A"]')

    expect(nextCard).not.toBeNull()

    pokerGame.remove()
  })

  describe('When poker-grid is clicked', () => {
    let pokerGame
    let pokerGrid
    const row = 2
    const column = 3

    beforeEach(() => {
      gameMock.getNextCard
        .mockReset()
        .mockReturnValueOnce(firstCardStub)
        .mockReturnValueOnce(secondCardStub)

      gameMock.getResult
        .mockReset()
        .mockReturnValueOnce({ name: 'RowRule', points: 15 })
        .mockReturnValueOnce({ name: 'ColumnRule', points: 20 })

      pokerGame = document.createElement('poker-game')
      document.body.appendChild(pokerGame)
      pokerGrid = pokerGame.shadowRoot.querySelector('poker-grid')

      gameMock.placeCardAt.mockClear()
    })

    afterEach(() => {
      pokerGame.remove()
    })

    it('When poker-grid is clicked, the game.placeCardAt() method should be called with row and column', () => {
      pokerGrid.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column }
      }))

      expect(gameMock.placeCardAt).toHaveBeenCalledWith(row, column)
    })

    it('When poker-grid is clicked, the next card should be displayed ', () => {
      pokerGrid.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column }
      }))

      const nextCard = pokerGame.shadowRoot.querySelector('#next-card poker-card[suite="Spades"][rank="10"]')

      expect(nextCard).not.toBeNull()
    })

    it('When poker-grid is clicked, the next card should be placed in the grid', () => {
      const nextCard = pokerGame.shadowRoot.querySelector('#next-card poker-card')

      pokerGrid.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column }
      }))

      const placedCard = pokerGrid.querySelector(`poker-card[slot="r${row}c${column}"]`)

      expect(placedCard).toBe(nextCard)
    })

    it('When poker-grid is clicked, the result for the row should be updated', () => {
      pokerGrid.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column }
      }))

      const resultName = pokerGame.shadowRoot.querySelector(`[slot="result-row${row}"] .name`)
      const resultPoints = pokerGame.shadowRoot.querySelector(`[slot="result-row${row}"] .points`)

      expect(resultName.textContent).toBe('RowRule')
      expect(resultPoints.textContent).toBe('15')
    })

    it('When poker-grid is clicked, the result for the column should be updated', () => {
      pokerGrid.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column }
      }))

      const resultName = pokerGame.shadowRoot.querySelector(`[slot="result-column${column}"] .name`)
      const resultPoints = pokerGame.shadowRoot.querySelector(`[slot="result-column${column}"] .points`)

      expect(resultName.textContent).toBe('ColumnRule')
      expect(resultPoints.textContent).toBe('20')
    })
  })
})
