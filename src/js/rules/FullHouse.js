import { Rule } from './Rule.js'
import { OnePair } from './OnePair.js'
import { ThreeOfAKind } from './ThreeOfAKind.js'

/**
 * Class representing the Full House rule.
 */
export class FullHouse extends Rule {
  #onePairRule
  #threeOfAKindRule

  /**
   * Creates an instance of FullHouse class.
   *
   * @param {OnePair} onePairRule - an instance of the OnePair rule
   * @param {ThreeOfAKind} threeOfAKindRule - an instance of the ThreeOfAKind rule
   */
  constructor (onePairRule = new OnePair(), threeOfAKindRule = new ThreeOfAKind()) {
    const name = 'Full House'
    const value = 25

    super(name, value)

    this.#onePairRule = onePairRule
    this.#threeOfAKindRule = threeOfAKindRule
  }

  /**
   * Tests if the line of cards fulfills the Full House rule.
   *
   * @param {object} line - the line of cards to test for the rule
   * @returns { boolean} - true if the line has a pair of one rank and three of another rank, false otherwise
   */
  test (line) {
    return this.#onePairRule.test(line) && this.#threeOfAKindRule.test(line)
  }
}
