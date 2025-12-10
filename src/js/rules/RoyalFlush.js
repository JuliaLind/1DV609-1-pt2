import { Rule } from './Rule.js'

/**
 * Class representing the Flush rule.
 */
export class RoyalFlush extends Rule {
  /**
   * Creates an instance of Royal Flush rule.
   *
   */
  constructor () {
    const name = 'Royal Flush'
    const value = 100

    super(name, value)
  }
}
