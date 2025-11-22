const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
      * {
      box-sizing: border-box;
    }

    :host {
      display: grid;
      grid-template-rows: repreat(5, 1fr) fit-content;
      grid-template-columns: repeat(5, 1fr) fit-content;
      height: 100%;
      width: 100%;
      position: relative;
    }

  </style>
`

customElements.define('poker-grid',
  class extends HTMLElement {
    #abortController = new AbortController()

    /**
     * Creates an instance of poker-grid.
     */
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.#initialize()
    }

    #initialize() {
      for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
          this.shadowRoot.appendChild(this.#makeCardSlot({ row, column })
          )
        }
        this.shadowRoot.appendChild(this.#makeResultSlot({ row }))
      }

      for (let column = 0; column < 5; column++) {
        this.shadowRoot.appendChild(this.#makeResultSlot({ column }))
      }
      this.shadowRoot.appendChild(document.createElement('div'))
    }

    connectedCallback() {
      this.shadowRoot.addEventListener('click', this.#onClick, { signal: this.#abortController.signal })
    }

    disconnectedCallback() {
      this.#abortController.abort()
    }

    #makeCardSlot(placement) {
      const { row, column } = placement

      const template = document.createElement('template')
      template.innerHTML = `
        <div class="card-slot" data-row="${row}" data-column="${column}">
          <slot name="r${row}c${column}"></slot>
        </div>
        `

      return template.content.querySelector('.card-slot')
    }

    #makeResultSlot(placement) {
      const resultField = document.createElement('div')
      resultField.classList.add('result-slot')

      for (const [direction, index] of Object.entries(placement)) {
        resultField.dataset[direction] = index
        
        const slot = document.createElement('slot')
        slot.name = `result-${direction}${index}`
        resultField.appendChild(slot)
      }

      return resultField
    }

    #onClick = (event) => {
      const cardSlot = event.target
      if (!cardSlot.classList.contains('card-slot')) {
        return
      }

      const row = parseInt(cardSlot.dataset.row, 10)
      const column = parseInt(cardSlot.dataset.column, 10)
      this.dispatchEvent(new CustomEvent('slot-click', {
        detail: { row, column },
        bubbles: true
      }))
    }
  })