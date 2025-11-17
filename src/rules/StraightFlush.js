import { Straight } from './Straight.js'
import { CardCollection } from '../logic/CardLine.js' 

export class StraightFlush extends Straight {
  constructor(value=75, name='Straight Flush') {
    super(value, name)
  }

  /**
   * Tests if the given cards form a straight flush.
   *
   * @param {CardCollection} cards - the cards to test
   * @returns { boolean } true if the cards form a straight flush
   */
  test (cards) {
    if(!super.test(cards)) {
      return false
    }

    return cards.isSameSuite()
  }
}