import '../poker-card/'
import '../poker-grid/'
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
    <poker-grid></poker-grid>
`

customElements.define('poker-game',
  /**
   * Represents the poker-game component.
   */
  class extends HTMLElement {
    #abortController = new AbortController()
    #game = new Game()
    #nextCardSlot
    #grid
    #nextCard

    /**
     * Creates an instance of poker-game.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#nextCardSlot = this.shadowRoot.querySelector('#next-card')
      this.#grid = this.shadowRoot.querySelector('poker-grid')

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
      this.#nextCard = card
    }

    /**
     * Called when the component is added to the DOM.
     * Sets up event listeners.
     */
    connectedCallback () {
      this.#grid.addEventListener('slot-click', this.#onSlotClick, { signal: this.#abortController.signal })
    }

    /**
     * Handles slot-click events from the poker-grid.
     *
     * @param {PointerEvent} event - custom slot-click event
     */
    #onSlotClick = (event) => {
      const { row, column } = event.detail

      this.#placeCardAt(row, column)
    }

    /**
     * Places the next card at the specified row and column in the grid.
     *
     * @param {number} row - row to place the card in
     * @param {number} column - column to place the card in
     */
    #placeCardAt (row, column) {
      this.#game.placeCardAt(row, column)
      this.#nextCard.setAttribute('slot', `r${row}c${column}`)
      this.#grid.appendChild(this.#nextCard)
      this.#renderNextCard()

      const result = this.#game.getRowResult(row)
      const template = document.createElement('template')

      template.innerHTML = `
        <div class="result-field" slot="result-row${row}">
          <span class="points">${result.points}</span>
          <span class="name">${result.name}</span>

        </div>
        `
      const field = template.content.querySelector('.result-field')

      this.#grid.appendChild(field)
    }

    /**
     * Called when the component is removed from the DOM.
     * Cleans up event listeners.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }
  })
