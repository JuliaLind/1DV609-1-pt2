import { CardDeck } from './CardDeck.js'
import { Rule } from '../rules/Rule.js'

/**
 * Represents the main game logic.
 */
export class Game {
    #nextCard

    /**
     * Creates a new instance of Game.
     *
     * @param {CardDeck} cardDeck - a deck of cards
     */
    constructor(cardDeck = new CardDeck()) {
        this.#nextCard = cardDeck.drawCard()
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
     * Returns the result for the specified row.
     *
     * @param {string} direction - the direction of line to get results for
     * @param {number} index - index of the row/column to get results for
     * @returns {object} - result object for the specified row
     */
    getResult(direction, index) {
        return Rule.toObject()
    }

    /**
     * Checks if the game is over.
     *
     * @returns {boolean} - true if the game is over, otherwise false
     */
    isOver() {
        return true
    }
}
