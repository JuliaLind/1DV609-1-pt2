const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
  <img src='' alt=''/>
`

customElements.define('poker-card', class extends HTMLElement {
  /**
   * Creates an instance of poker-card.
   */
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
      .append(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['src', 'alt']
  }

  /**
   * Called when one of the observed attributes changes.
   * Ensures that rank and suite cannot be changed once set.
   *
   * @param {string} name - name of the changed attribute
   * @param {any} oldValue - old value of the changed attribute
   * @param {any} newValue - new value of the changed attribute
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'src':
        this.shadowRoot.querySelector('img').setAttribute('src', newValue)
        break
      case 'alt':
        this.shadowRoot.querySelector('img').setAttribute('alt', newValue)
        break
    }
  }
})
