const template = document.createElement('template')

template.innerHTML = `
  <style>
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
      }
    }
)