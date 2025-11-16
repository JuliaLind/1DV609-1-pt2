import { Rule } from './Rule.js'

export class Sequential extends Rule {
  constructor(value, name) {
    if (new.target === Sequential) {
      throw new Error('Sequential is an abstract class')
    }

    super(value, name)
  }

  _test(cards) {
    if (cards.includes(undefined)) {
      return false
    }

    return this.#formsStraight(cards)
  }

  #formsStraight(cards) {
    const values = this.#collectValues(cards)

    if (this.#hasDuplicateRanks(values)) {
      return false
    }

    const sorted = this.#sortLowestToHighest(values)

    return this.#areSequential(sorted)
  }

  #collectValues(cards) {
    const values = []
  
    for (const card of cards) {
      const value = card.getValue()

      if (!values.includes(value)) {
        values.push(value)
      }
    }

    return values
  }

  #hasDuplicateRanks(values) {
    return values.length < 5
  }

  #sortLowestToHighest(values) {
    return [...values].sort((a, b) => a - b)
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