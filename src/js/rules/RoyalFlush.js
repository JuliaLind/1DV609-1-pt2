import { StraightFlush } from './StraightFlush.js'
import { GridLine } from '../logic/GridLine.js'

export class RoyalFlush extends StraightFlush {
  constructor() {
    const value = 100
    const name = 'Royal Flush'

    super(value, name)
  }

  /**
   * Tests if the given line form a royal flush.
   *
   * @param {GridLine} line - the grid line to test
   * @returns {boolean} true if the cards form a royal flush
   */
  test(line) {
    return this.#hasStraightFlush(line) && this.#hasAceAndTen(line)
  }

  #hasStraightFlush(line) {
    return super.test(line)
  }

  #hasAceAndTen(line) {
    return line.hasRank('A') && line.hasRank('10')
  }
}