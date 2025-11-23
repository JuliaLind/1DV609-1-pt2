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
    if (!line) {
      throw new Error('No line provided')
    }

    for (const rule of this.#rules) {
      if (rule.test(line)) {
        return { name: String(rule), points: Number(rule) }
      }
    }
    return { name: '', points: 0 }
  }
}