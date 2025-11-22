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

  evaluateLine(line) {
    for (const rule of this.#rules) {
      if (rule.test(line)) {
        return { name: String(rule), points: Number(rule) }
      }
    }
    return { name: '', points: 0 }
  }

  evaluateGrid(grid) {
    const results = { rows: [], columns: [] }

    for (let row = 0; row < 5; row++) {
      const gridLine = grid.getRow(row)
      const result = this.evaluateLine(gridLine)
      results.rows.push(result)
    }

    for (let column = 0; column < 5; column++) {
      const gridLine = grid.getColumn(column)
      const result = this.evaluateLine(gridLine)
      results.columns.push(result)
    }

    return results
  }
}