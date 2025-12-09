/**
 * Abstract base class for all rules.
 */
export class Rule {
  /**
   * Creates an instance of Rule.
   *
   * @throws {Error} If instantiated directly.
   */
  constructor () {
    throw new Error('Rule is an abstract class')
  }
}
