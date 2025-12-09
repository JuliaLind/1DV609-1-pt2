import { Rule } from './Rule.js'

/**
 * Class representing the Two Pairs rule.
 */
export class TwoPairs extends Rule {
  /**
   * Creates an instance of TwoPairs class.
   */
  constructor () {
    const name = 'Two Pairs'
    const value = 5

    super(name, value)
  }
}
