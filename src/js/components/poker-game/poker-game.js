import '../poker-card/'
import { Game } from '../../logic/Game.js'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
    * {
      box-sizing: border-box;
    }
  </style>

    <div id="next-card"></div>
`

customElements.define('poker-game',
  /**
   * Represents the poker-game component.
   */
  class extends HTMLElement {
    #game = new Game()
    #nextCardSlot

    /**
     * Creates an instance of poker-game.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#nextCardSlot = this.shadowRoot.querySelector('#next-card')

      this.#renderNextCard()
    }

    /**
     * Renders the next card in the next card slot.
     */
    #renderNextCard () {
      const nextCard = this.#game.getNextCard()

      const card = document.createElement('poker-card')
      card.setAttribute('suite', nextCard.suite)
      card.setAttribute('rank', nextCard.rank)

      this.#nextCardSlot.appendChild(card)
    }
  })
