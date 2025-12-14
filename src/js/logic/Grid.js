import { GridLine } from './GridLine.js'
import { Card } from './Card.js'

/**
 * Placeholder for Grid class
 */
export class Grid {
  #rows

  /**
   * Creates an instance of Grid with 5 grid lines.
   *
   * @param {GridLine[]} rows - the rows of the grid
   */
  constructor (rows = [
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine()
  ]) {
    this.#validateRows(rows)

    this.#rows = [...rows]
  }

  /**
   * Throws error ig the number of rows in the grid is not
   * exactly 5.
   *
   * @param {Array} rows - the rows of grid
   */
  #validateRows (rows) {
    if (rows.length !== Grid.ROW_COUNT) {
      throw new Error(`Grid must have ${Grid.ROW_COUNT} rows`)
    }
  }

  /**
   * Gets the number of rows required for the Grid
   */
  static get ROW_COUNT () {
    return 5
  }

  /**
   * Returns the row at the specified index.
   *
   * @param {number} index - the index of the row to retrieve
   * @returns {GridLine} - the grid line at the specified index
   */
  getRow (index) {
    return new GridLine(this.#rows[index].slots)
  }

  /**
   * Gets the column at the specified index.
   *
   * @param {number} index - the index of the column to retrieve
   * @returns {GridLine} - the grid line representing the column at the specified index
   */
  getColumn (index) {
    const columnSlots = this.#rows.map(row => row.slots[index])

    return new GridLine(columnSlots)
  }

  /**
   * Checks if the grid has no empty slots left.
   *
   * @returns {boolean} - true if the grid has no empty slots otherwise false
   */
  isFull () {
    return this.#rows.every(row => row.isFull())
  }

  /**
   * Places a card in the specified row and column.
   *
   * @param {number} rowIndex - the row to place the card in
   * @param {number} columnIndex - the column to place the card in
   * @param {Card} card - the card to place
   */
  placeCard (rowIndex, columnIndex, card) {
    this.#rows[rowIndex].placeCard(columnIndex, card)
  }
}
