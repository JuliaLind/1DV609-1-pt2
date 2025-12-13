import { CardDeck } from './CardDeck.js'
import { Rule } from '../rules/Rule.js'
import { Grid } from './Grid.js'
import { RuleSet } from '../rules/RuleSet.js'

/**
 * Represents the main game logic.
 */
export class Game {
    #nextCard
    #grid
    #cardDeck
    #rules
    #results = {
        row: [],
        column: []
    }

    /**
     * Creates a new instance of Game.
     *
     * @param {CardDeck} cardDeck - a deck of cards
     * @param {Grid} grid - the game grid
     */
    constructor(cardDeck = new CardDeck(), grid = new Grid(), ruleSet = new RuleSet()) {
        this.#nextCard = cardDeck.drawCard()
        this.#grid = grid
        this.#cardDeck = cardDeck
        this.#rules = ruleSet
    }

    /**
     * Gets the next card to be placed.
     *
     * @returns {Card} - the next card to be placed
     */
    getNextCard() {
        return this.#nextCard
    }

    /**
     * Places next card at specified position on the grid.
     *
     * @param {number} rowIndex - the row to place the card in
     * @param {number} columnIndex - the column to place the card in
     */
    placeCardAt(rowIndex, columnIndex) {
        this.#grid.placeCard(rowIndex, columnIndex, this.#nextCard)
        this.#results['row'][rowIndex] = this.#rules.evaluate(this.#grid.getRow(rowIndex))
        this.#results['column'][columnIndex] = this.#rules.evaluate(this.#grid.getColumn(columnIndex))

        this.#nextCard = this.#cardDeck.drawCard()
    }

    /**
     * Returns the result for the specified row.
     *
     * @param {string} direction - the direction of line to get results for
     * @param {number} index - index of the row/column to get results for
     * @returns {object} - result object for the specified row
     */
    getResult(direction, index) {
        const result = this.#results[direction][index]
        return result || Rule.toObject()
    }

    /**
     * Checks if the game is over.
     *
     * @returns {boolean} - true if the game is over, otherwise false
     */
    isOver() {
        return this.#grid.isFull()
    }

    /**
     * Calculates the total points from all rows and columns.
     *
     * @returns {number} - the total points
     */
    getTotalPoints() {
        const rowAndColumnResults = [...this.#results.row, ...this.#results.column]
        
        return rowAndColumnResults.reduce((total, result) => total + result.points, 0)
    }
}
