import { Grid } from "./Grid.js"
import { RuleSet } from "../rules/RuleSet.js"
import { CardDeck } from "./CardDeck.js"

export class Game {
  #grid
  #rules
  #cardDeck
  #nextCard
  #results

  constructor(grid = new Grid(), rules = new RuleSet(), cardDeck = new CardDeck()) {
    this.#rules = rules
    this.reset(grid, cardDeck)
  }

  reset(grid = new Grid(), cardDeck = new CardDeck()) {
    this.#grid = grid
    this.#cardDeck = cardDeck
    this.#nextCard = this.#cardDeck.drawCard()
    this.#clearResults()
  }

  #clearResults() {
    this.#results = {
      row: new Array(5).fill({ rule: '', points: 0 }),
      column: new Array(5).fill({ rule: '', points: 0 }),
    }
  }

  getNextCard() {
    return this.#nextCard
  }

  getLineResult(direction, index) {
    return this.#results[direction][index]
  }

  getTotalPoints() {
    return [...this.#results.row, ...this.#results.column]
      .reduce((sum, result) => sum + result.points, 0)
  }

  placeCardAt(row, column) {
    this.#grid.placeCard(this.#nextCard, row, column)
    this.#nextCard = this.#cardDeck.drawCard()
    this.#results.row[row] = this.#rules.evaluate(this.#grid.getRow(row))
    this.#results.column[column] = this.#rules.evaluate(this.#grid.getColumn(column))
  }

  isGameOver() {
    return this.#grid.isFull()
  }
}