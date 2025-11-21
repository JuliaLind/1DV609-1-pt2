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
          this.shadowRoot.appendChild(this.#makeCardSlot({row, column})
          )
        }
        this.shadowRoot.appendChild(this.#makeResultSlot({row}))
      }

      for (let column = 0; column < 5; column++) {
        this.shadowRoot.appendChild(this.#makeResultSlot({column}))
      }
      this.shadowRoot.appendChild(document.createElement('div'))
    }

    #makeCardSlot(placement) {
      const {row, column} = placement
 
      const template = document.createElement('template')
      template.innerHTML = `
        <div class="card-slot" data-row="${row}" data-column="${column}"><slot name="r${row}c${column}"></slot></div>
        `

      return template.content.querySelector('.card-slot')
    }

    #makeResultSlot(placement) {
      const template = document.createElement('template')
      template.innerHTML = `
        <div class="result-slot"><span class="name"></span><span class="points"></span></div>
        `
      const resultSlot = template.content.querySelector('.result-slot')


      for (const [key, value] of Object.entries(placement)) {
        resultSlot.dataset[key] = value
        resultSlot.classList.add(key)
      }

      return resultSlot
    }
  }
)