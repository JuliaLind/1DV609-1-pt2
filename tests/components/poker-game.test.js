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

  const gameMock = {
    getNextCard: vi.fn(),
    placeCardAt: vi.fn()
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
  })
})
