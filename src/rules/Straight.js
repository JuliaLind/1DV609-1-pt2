import { Rule } from './Rule.js'
import { GridLine } from '../logic/GridLine.js'

export class Straight extends Rule {
  constructor(value=15, name='Straight') {
    super(value, name)
  }

  /**
   * 
   * @param {GridLine} line - the gridline to test
   * @returns { boolean } true if the cards form a straight
   */
  test(line) {
    if (line.hasEmptySlots()) {
      return false
    }

    return this.#formsStraight(line)
  }

  #formsStraight(line) {
    const values = line.getDistinctValues()
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