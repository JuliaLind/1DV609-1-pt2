const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
`

export class PokerCard extends HTMLElement {
  static SUITES = Object.freeze(['hearts', 'diamonds', 'clubs', 'spades'])

  #suite = ''
  #rank = ''

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
    try {
      this.#setSuite(newValue)
    } catch {
      this.setAttribute('suite', this.#suite)
    }
  }

  #setSuite(value) {
    if (!this.#suite && this.#isValidSuite(value)) {
      this.#suite = value
    }

    throw new Error(`Illegal suite value change attempted: ${value}`)
  }

  #isValidSuite(value) {
    return this.constructor.SUITES.includes(value)
  }
}

customElements.define('poker-card', PokerCard)
