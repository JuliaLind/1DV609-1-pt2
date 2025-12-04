import { SameOfAKind } from "./SameOfAKind.js"

/**
 * Class representing the One Pair rule.
 */
export class OnePair extends SameOfAKind {
  /**
   * Creates an instance of OnePair rule.
   */
  constructor() {
    super(2, 'One Pair', 2)
  }
}