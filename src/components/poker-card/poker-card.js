const template = document.createElement('template')

template.innerHTML = `
  <style>
  </style>
`

export class PokerCard extends HTMLElement {
  static SUITES = Object.freeze(['hearts', 'diamonds', 'clubs', 'spades'])

  static RANKS = Object.freeze({
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  })

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

  getValue() {
    return this.constructor.RANKS[this.#rank]
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
    try {
      this.#setRank(newValue)
    } catch {
      this.setAttribute('rank', this.#rank)
    }
  }

  #setRank(value) {
    if (!this.#rank && this.#isValidRank(value)) {
      this.#rank = value
    } else {
      throw new Error(`Illegal rank value change attempted: ${value}`)
    }
  }

  #isValidRank(value) {
    return Object.keys(this.constructor.RANKS).includes(value)
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
