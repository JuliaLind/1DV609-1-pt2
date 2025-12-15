import { Card } from './Card.js'

/**
 * Represents a line in the grid.
 */
export class GridLine {
  #slots
  #rankFrequencies

  /**
   * Creates a new line for the grid with 5 empty slots.
   *
   * @param {Card[]} slots - array of cards to initialize the grid line with
   */
  constructor (slots = new Array(GridLine.SLOT_COUNT)) {
    this.#validateLength(slots)
    this.#slots = [...slots]
  }

  /**
   * Validates the length of the slots array.
   *
   * @param {Card[]} slots - array with slots that may contain cards
   * @throws {Error} - if the length of slots is not exactly 5
   */
  #validateLength (slots) {
    if (slots.length !== GridLine.SLOT_COUNT) {
      throw new Error('GridLine must have exactly 5 slots')
    }
  }

  /**
   * Gets the number of slots in a GridLine.
   *
   * @returns {number} - the number of slots
   */
  static get SLOT_COUNT () {
    return 5
  }

  /**
   * Returns a shallow copy of the slots in the grid line.
   *
   * @returns {Array} - array of slots in the grid line
   */
  get slots () {
    return [...this.#slots]
  }

  /**
   * Places a card in the specified slot.
   *
   * @param {number} index - index of the slot to place the card in
   * @param {Card} card - the card to place in the slot
   */
  placeCard (index, card) {
    this.#validateSlotExists(index)
    this.#validateEmptySlot(index)

    this.#slots[index] = card
  }

  /**
   * Checks if the given index is valid.
   *
   * @param {number} index - the index to check
   * @throws {Error} - if the index is out of bounds
   */
  #validateSlotExists (index) {
    if (!(index in this.#slots)) {
      throw new Error('Index out of bounds')
    }
  }

  /**
   * Checks if the specified slot is empty.
   *
   * @param {number} index - the index of slot to check
   * @throws {Error} - if the slot is already occupied
   */
  #validateEmptySlot (index) {
    if (this.#slots[index] !== undefined) {
      throw new Error('Slot is occupied')
    }
  }

  /**
   * Checks if there are any empty slots in the grid line.
   *
   * @returns {boolean} - true if there are no empty slots, false otherwise
   */
  isFull () {
    return this.#slots.every(slot => slot !== undefined)
  }

  /**
   * Checks if any of the cards in the grid line has the specified rank.
   *
   * @param {number} rank - the numerical rank value
   * @returns {boolean} - true if a card with the specified rank exists in the grid line, false otherwise
   */
  hasRank (rank) {
    return this.#slots.some(card => Number(card) === rank)
  }

  /**
   * Gets the frequencies of each rank in the grid line.
   * The ranks are represented by their numeric values 2-14.
   *
   * @returns {object} - an object mapping ranks to their frequencies
   */
  getRankFrequencies () {
    this.#rankFrequencies = {}

    for (const card of this.#slots) {
      this.#addToRankFrequencies(card)
    }

    return this.#rankFrequencies
  }

  /**
   * Adds a card to the rank frequency summery.
   *
   * @param { Card } card - the card to add
   */
  #addToRankFrequencies (card) {
    if (card) {
      const rank = Number(card)
      this.#rankFrequencies[rank] = (this.#rankFrequencies[rank] || 0) + 1
    }
  }
}
