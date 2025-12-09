import { describe, it, expect, beforeEach } from 'vitest'
import '../../src/js/components/game-message/game-message.js'

describe('game-message', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    const gameMessage = document.createElement('game-message')

    document.body.appendChild(gameMessage)
  })

  it('game-message should be removed from the DOM when button is clicked', () => {
    const gameMessage = document.querySelector('game-message')
    const button = gameMessage.shadowRoot.querySelector('button')
    button.click()

    const gameMessageAfterClick = document.querySelector('game-message')
    expect(gameMessageAfterClick).toBeNull()
  })
})
