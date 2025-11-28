import { RoyalFlush } from './RoyalFlush.js'
import { StraightFlush } from './StraightFlush.js'
import { FourOfAKind } from './FourOfAKind.js'
import { FullHouse } from './FullHouse.js'
import { Flush } from './Flush.js'
import { Straight } from './Straight.js'
import { ThreeOfAKind } from './ThreeOfAKind.js'
import { TwoPairs } from './TwoPairs.js'
import { OnePair } from './OnePair.js'


export class RuleSet {
  #rules

  constructor() {
    this.#rules = [
      new RoyalFlush(),
      new StraightFlush(),
      new FourOfAKind(),
      new FullHouse(),
      new Flush(),
      new Straight(),
      new ThreeOfAKind(),
      new TwoPairs(),
      new OnePair(),
    ]
  }

  evaluate(line) {
    this.#validateLine(line)

    const matchingRule = this.#findMatchingRule(line)

    return matchingRule ? matchingRule.toObject() : this.#getDummyRule()
  }

  #findMatchingRule(line) {
    return this.#rules.find(rule => rule.test(line))
  }

  #validateLine(line) {
    if (!line) {
      throw new Error('No line provided')
    }
  }

  #getDummyRule() {
    return {
      name: '',
      points: 0
    }
  }
}