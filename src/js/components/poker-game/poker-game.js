const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host,
    * {
      box-sizing: border-box;
    }
  </style>
`

customElements.define('poker-game',
  /**
   * Represents the poker-game component.
   */
  class extends HTMLElement {})
