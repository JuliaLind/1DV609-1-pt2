import { Card } from './Card.js'

/**
 * Represents a line in the grid.
 */
export class GridLine {
  #slots

  /**
   * Creates a new line for the grid with 5 empty slots.
   *
   * @param {Card[]} slots - array of cards to initialize the grid line with
   */
  constructor(slots = new Array(GridLine.SLOT_COUNT)) {
    this.#validateLength(slots)
    this.#slots = [...slots]
  }

  /**
   * Validates the length of the slots array.
   *
   * @param {Card[]} slots - array with slots that may contain cards
   * @throws {Error} - if the length of slots is not exactly 5
   */
  #validateLength(slots) {
    if (slots.length !== GridLine.SLOT_COUNT) {
      throw new Error('GridLine must have exactly 5 slots')
    }
  }

  /**
   * Gets the number of slots in a GridLine.
   *
   * @returns {number} - the number of slots
   */
  static get SLOT_COUNT() {
    return 5
  }

  /**
   * Returns a shallow copy of the slots in the grid line.
   *
   * @returns {Array} - array of slots in the grid line
   */
  get slots() {
    return [...this.#slots]
  }

  /**
   * Places a card in the specified slot.
   *
   * @param {number} index - index of the slot to place the card in
   * @param {Card} card - the card to place in the slot
   */
  placeCard(index, card) {
    this.#validateIndex(index)

    if (this.#slots[index] !== undefined) {
      throw new Error('Slot is occupied')
    }

    this.#slots[index] = card
  }

  /**
   * Checks if the given index is valid.
   *
   * @param {number} index - the index to check
   * @throws {Error} - if the index is out of bounds
   */
  #validateIndex(index) {
    if (!(index in this.#slots)) {
      throw new Error('Index out of bounds')
    }
  }
}
