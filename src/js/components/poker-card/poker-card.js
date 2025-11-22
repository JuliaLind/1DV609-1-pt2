const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
  <img src='' alt=''/>
`

customElements.define('poker-card', class extends HTMLElement {
  #rank
  #suite

  /**
   * Creates an instance of poker-card.
   */
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
      .append(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['rank', 'suite']
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
      case 'rank':
        this.#rank = newValue
        this.#updateImage()
        break
      case 'suite':
        this.#suite = newValue
        this.#updateImage()
        break
    }
  }

  #updateImage() {
    if (!this.#rank || !this.#suite) {
      return
    }

    const imgName = this.#rank + this.#suite.charAt(0).toUpperCase() + '.svg'
    const img = this.shadowRoot.querySelector('img')
    img.setAttribute('src', `./img/${imgName}`)
    img.setAttribute('alt', `${this.#rank} of ${this.#suite}`)
  }
})
