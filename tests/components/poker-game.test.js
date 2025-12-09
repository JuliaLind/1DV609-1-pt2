import { describe, it, expect, beforeAll, vi } from 'vitest'
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
    getNextCard: vi.fn()
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
})
