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
  })
