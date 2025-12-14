import { GridLine } from './GridLine.js'

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
  constructor(rows = [
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine()
  ]) {
    if (rows.length !== 5) {
      throw new Error('Grid must have 5 rows')
    }

    this.#rows = [...rows]
  }

  /**
   * Returns the row at the specified index.
   *
   * @param {number} index - the index of the row to retrieve
   * @returns {GridLine} - the grid line at the specified index
   */
  getRow(index) {
    return new GridLine(this.#rows[index].slots)
  }
}
