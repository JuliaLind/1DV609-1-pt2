import '../poker-card/'
import '../poker-grid/'
import '../game-message/'

import { Game } from '../../logic/Game.js'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
    * {
      box-sizing: border-box;
    }

    :host {
      padding: 1rem;
      display: flex;
      max-height: 100vh;
      flex-direction: row; 
    }

    .result-field {
      display: grid;
      grid-template-rows: 1fr 2fr;
      height: 100%;
    }

    .points {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--poker-green);
      }

    .name {
      font-size: 1rem;
      color: var(--dark-poker-green);
      font-family: sans-serif;
      font-size: 1.1rem;
    }

    #next-card {
      width: fit-content;
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
    #results = {
      row: [],
      column: []
    }

    /**
     * Creates an instance of poker-game.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#nextCardSlot = this.shadowRoot.querySelector('#next-card')
      this.#grid = this.shadowRoot.querySelector('poker-grid')

      this.#init()
    }

    /**
     * Initializes the game component.
     */
    #init () {
      this.#createResultFields()
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
     * Creates 10 result fields in the grid.
     */
    #createResultFields () {
      for (let index = 0; index < 5; index++) {
        this.#createOneResultField('row', index)
        this.#createOneResultField('column', index)
      }
    }

    /**
     * Creates a result field.
     *
     * @param {string} direction - row or column
     * @param {number} index - index of the row or column
     */
    #createOneResultField (direction, index) {
      const template = document.createElement('template')

      template.innerHTML = `
        <div class="result-field" slot="result-${direction + index}">
          <span class="points">0</span>
          <span class="name"></span>

        </div>
        `
      const field = template.content.querySelector('.result-field')

      this.#results[direction].push({
        name: field.querySelector('.name'),
        points: field.querySelector('.points')
      })

      this.#grid.appendChild(field)
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
      try {
        this.#placeCardAt(event.detail)
        this.#displayResults(event.detail)
      } catch (err) {
        this.#handleError(err)
      }
    }

    /**
     * Places the next card at the specified row and column in the grid.
     *
     * @param {object} coordinates - row and column
     * @param { number } coordinates.row - row index
     * @param { number } coordinates.column - column index
     */
    #placeCardAt ({ row, column }) {
      this.#game.placeCardAt(row, column)
      this.#nextCard.setAttribute('slot', `r${row}c${column}`)
      this.#grid.appendChild(this.#nextCard)
      this.#renderNextCard()
    }

    /**
     * Displays the results after a card has been placed.
     *
     * @param {object} coordinates - row and column
     * @param { number } coordinates.row - row index
     * @param { number } coordinates.column - column index
     */
    #displayResults ({ row, column }) {
      this.#renderResult({ direction: 'row', index: row })
      this.#renderResult({ direction: 'column', index: column })
      if (this.#game.isGameOver()) {
        this.#handleGameOver()
      }
    }

    /**
     * Updates the content of one resultfield.
     *
     * @param {object} fieldId - direction and index position of the resultfield
     */
    #renderResult (fieldId) {
      const { direction, index } = fieldId

      const { points, name } = this.#game.getResult(direction, index)

      this.#results[direction][index].name.textContent = name
      this.#results[direction][index].points.textContent = points
    }

    /**
     * Displays a message with given title and text.
     *
     * @param {object} content - message content
     * @param {string} content.title - title of the message
     * @param {string} content.text - text of the message
     */
    #displayMessage ({ title, text }) {
      const template = document.createElement('template')
      template.innerHTML = `
        <game-message>
          <div>
            <p class="title"></p>
            <p class="text"></p>
          </div>
        </game-message>
        `
      const message = template.content.querySelector('game-message')
      message.querySelector('.title').textContent = title
      message.querySelector('.text').textContent = text
      this.shadowRoot.appendChild(message)
    }

    /**
     * Handles the game over event.
     */
    #handleGameOver () {
      this.#displayMessage(
        {
          title: 'Congrants, you finished the poker game!',
          text: `Your total points: ${this.#game.getTotalPoints()}`
        }
      )
    }

    /**
     * Handles error.
     *
     * @param {Error} err - the error message
     */
    #handleError (err) {
      this.#displayMessage(
        {
          title: 'Oh no!',
          text: err.message
        }
      )
    }

    /**
     * Called when the component is removed from the DOM.
     * Cleans up event listeners.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }
  })
