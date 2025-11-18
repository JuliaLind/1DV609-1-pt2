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
      const cardSlotTemplate = document.createElement('template')
      cardSlotTemplate.innerHTML = `
        <div class="card-slot" data-row="" data-column=""><slot name=""></slot></div>
        `

      const resultSlotTemplate = document.createElement('template')
      resultSlotTemplate.innerHTML = `
        <div class="result-slot"><span class="name"></span><span class="points"></span></div>
        `

      for (let row = 0; row < 5; row += 1) {
        for (let column = 0; column < 5; column += 1) {
          const templateCopy = cardSlotTemplate.content.cloneNode(true)
          const cardSlot = templateCopy.querySelector('.card-slot')
          cardSlot.dataset.row = row
          cardSlot.dataset.column = column

          this.shadowRoot.appendChild(templateCopy)
        }
        const templateCopy = resultSlotTemplate.content.cloneNode(true)
        const resultSlot = templateCopy.querySelector('.result-slot')
        resultSlot.dataset.row = row
        resultSlot.classList.add('row')
        

        this.shadowRoot.appendChild(templateCopy)
      }

      for (let column = 0; column < 6; column += 1) {
        const templateCopy = resultSlotTemplate.content.cloneNode(true)
        const resultSlot = templateCopy.querySelector('.result-slot')
        resultSlot.dataset.column = column
        resultSlot.classList.add('column')
        
        this.shadowRoot.appendChild(templateCopy)
      }
    }
  }
)