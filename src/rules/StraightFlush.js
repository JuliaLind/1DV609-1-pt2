import { Straight } from './Straight.js'

export class StraightFlush extends Straight {
  constructor(value=75, name='Straight Flush') {
    super(value, name)
  }

  test (cards) {
    if(!super.test(cards)) {
      return false
    }

    return this.#isSameSuit(cards)
  }

  #isSameSuit(cards) {
    const firstSuit = cards[0].getAttribute('suit')

    for (const card of cards) {
      if (card.getAttribute('suit') !== firstSuit) {
        return false
      }
    }

    return true
  }
}