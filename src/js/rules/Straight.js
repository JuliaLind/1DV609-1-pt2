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
    return !line.hasEmptySlots() && this.#formsStraight(line)
  }

  #formsStraight(line) {
    return !this.#hasDuplicateRanks(line) && this.#isSequential(line)
  }

  #hasDuplicateRanks(line) {
    return Object.values(line.getRankFrequencies()).some(count => count > 1)
  }

  /**
   * Checks if the given values are sequential.
   *
   * @param {number[]} values 
   * @returns {boolean} true if the values form a straight
   */
  #isSequential(line) {
    const values = line.getDistinctValues()

    return values[values.length - 1] - values[0] === values.length - 1
  }
}