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
    if (new.target === Rule) {
      throw new Error('Rule is an abstract class')
    }
  }
}
