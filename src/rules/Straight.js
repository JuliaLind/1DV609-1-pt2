import { Rule } from './Rule.js'
import { CardCollection } from '../logic/CardCollection.js'

export class Straight extends Rule {
  constructor(value=15, name='Straight') {
    super(value, name)
  }

  /**
   * 
   * @param {CardCollection} cards - a collection of cards to test
   * @returns 
   */
  test(cards) {
    if (cards.hasEmptySlots()) {
      return false
    }

    return this.#formsStraight(cards)
  }

  #formsStraight(cards) {
    const values = cards.getDistinctValues()

    if (this.#hasDuplicateRanks(values)) {
      return false
    }

    return this.#areSequential(values)
  }

  #hasDuplicateRanks(values) {
    return values.length < 5
  }

  /**
   * Checks if the given values are sequential.
   *
   * @param {number[]} values 
   * @returns {boolean} true if the values form a straight
   */
  #areSequential(values) {
    return values[values.length - 1] - values[0] === values.length - 1
  }
}