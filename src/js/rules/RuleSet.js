import { OnePair } from './OnePair.js'
import { TwoPairs } from './TwoPairs.js'
import { ThreeOfAKind } from './ThreeOfAKind.js'
import { Straight } from './Straight.js'
import { Flush } from './Flush.js'
import { FullHouse } from './FullHouse.js'
import { FourOfAKind } from './FourOfAKind.js'
import { StraightFlush } from './StraightFlush.js'
import { RoyalFlush } from './RoyalFlush.js'

/**
 * Class representing a set of poker rules.
 */
export class RuleSet {
  #rules = []

  /**
   * Creates an instance of RuleSet containing all poker rules.
   *
   * @param {object} rules - an object containing instances of poker rules
   * @param {RoyalFlush} rules.royalFlush - an instance of the RoyalFlush rule
   * @param {StraightFlush}  rules.straightFlush - an instance of the StraightFlush rule
   * @param {FourOfAKind} rules.fourOfAKind - an instance of the FourOfAKind rule
   * @param {FullHouse} rules.fullHouse  - an instance of the FullHouse rule
   * @param {Flush} rules.flush - an instance of the Flush rule
   * @param {Straight} rules.straight  - an instance of the Straight rule
   * @param {ThreeOfAKind} rules.threeOfAKind - an instance of the ThreeOfAKind rule
   * @param {TwoPairs} rules.twoPairs -  an instance of the TwoPairs rule
   * @param {OnePair} rules.onePair - an instance of the OnePair rule
   */
  constructor ({
    royalFlush = new RoyalFlush(),
    straightFlush = new StraightFlush(),
    fourOfAKind = new FourOfAKind(),
    fullHouse = new FullHouse(),
    flush = new Flush(),
    straight = new Straight(),
    threeOfAKind = new ThreeOfAKind(),
    twoPairs = new TwoPairs(),
    onePair = new OnePair()
  }) {
    this.#rules.push(royalFlush, straightFlush, fourOfAKind, fullHouse, flush, straight, threeOfAKind, twoPairs, onePair)
  }

  /**
   * Evaluates the given line against the set of poker rules.
   *
   * @returns {object} - name and points of the highest ranking rule that matches the line.
   */
  evaluate () {
    for (const rule of this.#rules) {
      rule.test()
    }
  }
}
