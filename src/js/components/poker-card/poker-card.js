const template = document.createElement('template')

template.innerHTML = `
  <style>
  :host {
    display: block;
    max-width: 100px;
    width: 100px;
    height: auto;
    aspect-ratio: auto;
  }

  img {
   width: 100%;
    object-fit: contain;
  }

  </style>
  <img src='' alt=''/>
`

customElements.define('poker-card',
  /**
   * Class representing a poker card custom element.
   */
  class extends HTMLElement {
  })
