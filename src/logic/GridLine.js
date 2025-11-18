export class GridLine {
  #cards

  constructor(cards = new Array(5)) {
    this.#validateLength(cards.length)
    this.#cards = [...cards]
  }

  #validateLength(length) {
    if (length !== 5) {
      throw new Error('GridLine must have exactly 5 slots')
    }
  }

  addCard(card, position) {
    this.#validateSlotIndex(position)

    if (!this.#isSlotEmpty(position) && this.getCard(position) !== card) {
      throw new Error('Slot is not empty')
    }

    this.#cards[position] = card
  }

  #isSlotEmpty(position) {
    return this.#cards[position] === undefined
  }

  #validateSlotIndex(position) {
    if (position < 0 || position >= this.#cards.length) {
      throw new Error('Slot index out of bounds')
    }
  }

  getCards() {
    return [...this.#cards]
  }

  getCard(position) {
    return this.#cards[position]
  }

  hasEmptySlots() {
    return this.#cards.includes(undefined)
  }

  hasRank(rank) {
    return this.#cards.some(card => card?.getAttribute('rank') === rank)
  }

  getDistinctValues() {
    const values = []

    for (const card of this.#cards) {
      const value = card?.valueOf()

      if (value && !values.includes(value)) {
        values.push(value)
      }
    }
    return this.#sortLowestToHighest(values)
  }

  #sortLowestToHighest(values) {
    return [...values].sort((a, b) => a - b)
  }

  isSameSuite() {
    let suite = undefined

    for (const card of this.#cards) {
      if (!card) {
        continue
      }

      if (!suite) {
        suite = card.getAttribute('suit')
      } else if (suite !== card.getAttribute('suit')) {
        return false
      }
    }

    return true
  }

  getRanks() {
    const ranks = {}

    for (const card of this.#cards) {
      if (!card) {
        continue
      }
      const rank = card.getAttribute('rank')

      ranks[rank] = (ranks[rank] || 0) + 1
    }

    return ranks
  }
}