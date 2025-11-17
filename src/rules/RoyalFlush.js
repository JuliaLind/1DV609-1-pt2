import { StraightFlush } from './StraightFlush.js'
import { CardCollection } from '../logic/CardCollection.js'

export class RoyalFlush extends StraightFlush {
  constructor() {
    const value = 100
    const name = 'Royal Flush'

    super(value, name)
  }

  /**
   * Tests if the given cards form a royal flush.
   *
   * @param {CardCollection} cards - the colleciton of cards to test
   * @returns {boolean} true if the cards form a royal flush
   */
  test(cards) {
    if (!super.test(cards)) {
      return false
    }

    return cards.hasRank('A') && cards.hasRank('10')
  }
}