const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
`

customElements.define('poker-card',
  class extends HTMLElement {
    #suite
    #rank

    /**
     * Creates an instance of poker-card.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .append(template.content.cloneNode(true))
    }

    static get observedAttributes() {
      return ['suite', 'rank']
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
      switch (name) {
        case 'rank':
          this.#handleRankChange(newValue)
          break
        case 'suite':
          this.#handleSuiteChange(newValue)
          break
      }
    }

    #handleRankChange(newValue) {
      if (!this.#rank) {
        this.#setRank(newValue)
      } else {
        this.setAttribute('rank', this.#rank)
      }
    }

    #setRank(value) {
      // @TODO add validation of rank value
      this.#rank = value
    }

    #handleSuiteChange(newValue) {
      if (!this.#suite) {
        this.#setSuite(newValue)
      } else {
        this.setAttribute('suite', this.#suite)
      }
    }

    #setSuite(value) {
      // @TODO add validation of suite value
      this.#suite = value
    }
  }
)