import { OnePair } from './OnePair.js'
import { TwoPairs } from './TwoPairs.js'
import { ThreeOfAKind } from './ThreeOfAKind.js'
import { Straight } from './Straight.js'
import { Flush } from './Flush.js'
import { FullHouse } from './FullHouse.js'
import { FourOfAKind } from './FourOfAKind.js'
import { StraightFlush } from './StraightFlush.js'
import { RoyalFlush } from './RoyalFlush.js'
import { Rule } from './Rule.js'

/**
 * Class representing a set of poker rules.
 */
export class RuleSet {
  #rules = []

  /**
   * Creates an instance of RuleSet containing all poker rules.
   */
  constructor () {
    this.#rules.push(new RoyalFlush())
    this.#rules.push(new StraightFlush())
    this.#rules.push(new FourOfAKind())
    this.#rules.push(new FullHouse())
    this.#rules.push(new Flush())
    this.#rules.push(new Straight())
    this.#rules.push(new ThreeOfAKind())
    this.#rules.push(new TwoPairs())
    this.#rules.push(new OnePair())
  }

  /**
   * Evaluates the given line against the set of poker rules.
   *
   * @returns {object} - name and points of the highest ranking rule that matches the line.
   */
  evaluate () {
    return Rule.toObject()
  }
}
