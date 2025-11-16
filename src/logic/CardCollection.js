export class CardCollection {
  #cards

  constructor(length = 5) {
    this.#cards = new Array(length)
  }

  addCard(card, position) {
    this.#cards[position] = card
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
}