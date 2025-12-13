import { GridLine } from './GridLine.js'

/**
 * Placeholder for Grid class
 */
export class Grid {
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
  }
}
