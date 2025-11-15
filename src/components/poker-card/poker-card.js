const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
`

customElements.define('poker-card',
  class extends HTMLElement {

    /**
     * Creates an instance of poker-card.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .append(template.content.cloneNode(true))
    }
  })