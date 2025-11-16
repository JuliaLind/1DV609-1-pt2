export class CardCollection {
  #cards

  constructor(length = 5) {
    this.#cards = new Array(length)
  }

  addCard(card, position) {
    if (!this.#isSlotEmpty(position) && this.getCard(position) !== card) {
      throw new Error('Slot is not empty')
    }
  
    this.#cards[position] = card
  }

  #isSlotEmpty(position) {
    return this.#cards[position] === undefined
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
      const value = card?.getValue()

      if (value && !values.includes(value)) {
        values.push(value)
      }
    }
    return this.#sortLowestToHighest(values)
  }

  #sortLowestToHighest(values) {
    return [...values].sort((a, b) => a - b)
  }
}