const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
      * {
      box-sizing: border-box;
    }

    :host {
      display: grid;
      max-height: 100%;
      max-width: 100%;
      width: fit-content;
      height: fit-content;
      gap: 0.5rem;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(6, 1fr);
      margin-left: auto;
      margin-right: auto;
    }

    .card-slot {
      border: 2px solid var(--light-poker-green);
      border-radius: 0.5rem;
      display: flex;
      cursor: pointer;

    }

    .card-slot,
    .result-field {
      width: 100px;
      height: 140px;
    }
  </style>
`

customElements.define('poker-grid',
  /**
   * Class representing a poker grid component.
   */
  class extends HTMLElement {
    #abortController = new AbortController()

    /**
     * Creates an instance of poker-grid.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#init()
    }

    /**
     * Initializes the poker grid by creating card slots
     * and result fields.
     */
    #init () {
      for (let row = 0; row < 5; row++) {
        this.#createSlotRow(row)
        this.#createResultField({ direction: 'row', index: row })
      }

      this.#createResultRow()
    }

    /**
     * Creates a row of card slots.
     *
     * @param {number} row - index of the rpw
     */
    #createSlotRow (row) {
      for (let column = 0; column < 5; column++) {
        this.#createOneSlot({ row, column })
      }
    }

    /**
     * Creates one card slot at the given placement.
     *
     * @param {object} placement - row and column to place the slot in
     */
    #createOneSlot (placement) {
      const { row, column } = placement
      const template = document.createElement('template')
      template.innerHTML = `
        <div class="card-slot" data-row="${row}" data-column="${column}">
          <slot name="r${row}c${column}"></slot>
        </div>
        `

      this.shadowRoot.appendChild(template.content.querySelector('.card-slot'))
    }

    /**
     * Creates a row of result fields.
     */
    #createResultRow () {
      for (let column = 0; column < 5; column++) {
        this.#createResultField({ direction: 'column', index: column })
      }
    }

    /**
     * Creates one result field at the given placement.
     *
     * @param {object} placement - direction and index to place the result field in
     */
    #createResultField (placement) {
      const { direction, index } = placement
      const template = document.createElement('template')

      template.innerHTML = `
        <div class="result-field">
          <slot name="result-${direction}${index}"></slot>
        </div>
        `

      this.shadowRoot.appendChild(template.content.querySelector('.result-field'))
    }

    /**
     * Called when the element is added to the DOM.
     */
    connectedCallback () {
      this.shadowRoot.addEventListener('click', this.#onClick, { signal: this.#abortController.signal })
    }

    /**
     * Handles a click event on a card slot.
     *
     * @param {event} event - click event on a card slot
     */
    #onClick = (event) => {
      const cardSlot = event.target

      if (!cardSlot.classList.contains('card-slot')) {
        return
      }

      const row = parseInt(cardSlot.dataset.row)
      const column = parseInt(cardSlot.dataset.column)

      this.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column },
        bubbles: true
      }))
    }

    /**
     * Cleans up when the element is removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }
  })
