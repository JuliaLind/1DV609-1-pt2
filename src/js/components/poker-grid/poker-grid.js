const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
      * {
      box-sizing: border-box;
    }
  </style>
`

customElements.define('poker-grid',
  /**
   * Class representing a poker grid component.
   */
  class extends HTMLElement {
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
      }
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
  })
