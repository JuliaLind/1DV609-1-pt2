/**
 * Plaeholder for GridLine class
 */
export class GridLine {
  #slots

  /**
   * Creates a new line for the grid with 5 empty slots.
   *
   */
  constructor() {

    this.#slots = new Array(5)
  }

  /**
   * Returns a shallow copy of the slots in the grid line.
   *
   * @returns {Array} - array of slots in the grid line
   */
  get slots() {
    return [...this.#slots]
  }
}
