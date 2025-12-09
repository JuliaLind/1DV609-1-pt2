/**
 * Abstract class representing a rule that checks
 * for a certain number of cards of the same rank.
 */
export class SameOfAKind {
  /**
   * Creates an instance of SameOfAKind.
   *
   * @param {number} sameRankCount - the number of same rank cards required to fulfill the rule
   */
  constructor(sameRankCount) {
    if (new.target === SameOfAKind) {
      throw new Error('SameOfAKind is an abstract class')
    }

    if (!sameRankCount) {
      throw new Error('rankCount missing')
    }
  }
}
