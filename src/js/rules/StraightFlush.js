import { Straight } from './Straight.js'
import { GridLine } from '../logic/GridLine.js' 

export class StraightFlush extends Straight {
  constructor(value=75, name='Straight Flush') {
    super(value, name)
  }

  /**
   * Tests if the given line form a straight flush.
   *
   * @param {GridLine} line - the gridline to test
   * @returns { boolean } true if the cards form a straight flush
   */
  test (line) {
    if(!super.test(line)) {
      return false
    }

    return line.isSameSuite()
  }
}