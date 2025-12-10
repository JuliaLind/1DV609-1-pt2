import { Rule } from './Rule.js'

/**
 * Class representing the Straight Flush rule.
 */
export class StraightFlush extends Rule {
  /**
   * Creates an instance of StraightFlush class.
   *
   */
  constructor () {
    const name = 'Straight Flush'
    const value = 75

    super(name, value)
  }
}
