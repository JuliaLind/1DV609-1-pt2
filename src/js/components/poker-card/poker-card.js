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
    #rank
    #suite
    #img

    /**
     * Creates an instance of poker-card.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .append(template.content.cloneNode(true))

      this.#img = this.shadowRoot.querySelector('img')
    }

    /**
     * Returns an array of attribute names to observe for changes.
     *
     * @returns {Array} - array of attribute names to observe
     */
    static get observedAttributes() {
      return ['rank', 'suite']
    }

    /**
     * Sets the rank of the poker card.
     *
     * @param {string} value - rank of the poker card
     */
    set rank(value) {
      this.setAttribute('rank', value)
      this.#rank = value
    }

    /**
     * Sets the suite of the poker card.
     *
     * @param {string} value - suite of the poker card
     */
    set suite(value) {
      this.setAttribute('suite', value)
      this.#suite = value
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
      if (oldValue === newValue) {
        return
      }

      if (['rank', 'suite'].includes(name)) {
        this[name] = newValue

        this.#refreshImage()
      }
    }

    /**
     * Refreshes the poker card image based on the current rank and suite.
     */
    #refreshImage() {
      if (this.#rank && this.#suite) {
        this.#updateAltAttribute()
        this.#updateSrcAttribute()
      }
    }

    /**
     * Updates the alt attribute of the poker card image.
     */
    #updateAltAttribute() {
      this.#img.setAttribute('alt', `${this.#rank} of ${this.#suite}`)
    }

    /**
     * Updates the src attribute of the poker card image.
     */
    #updateSrcAttribute() {
      const imageName = this.#rank + this.#suite.charAt(0)
      const imagePath = `./img/${imageName}.svg`
      this.#img.setAttribute('src', new URL(imagePath, import.meta.url).href)
    }
  })
