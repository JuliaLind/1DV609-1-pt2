import { GridLine } from './GridLine.js'

export class Grid {
  #rows

  constructor(rows = [
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine(),
    new GridLine(),
  ]) {
    this.#rows = [...rows]
  }

  placeCard(card, row, column) {
    this.#rows[row].placeCard(card, column)
  }

  getRow(row) {
    return new GridLine(this.#rows[row].getCards())
  }

  getColumn(column) {
    const gridLine = new GridLine()

    for (let row = 0; row < this.#rows.length; row++) {
      const card = this.#rows[row].getCard(column)

      gridLine.placeCard(card, row)
    }
    return gridLine
  }

  isFull() {
    for (const row of this.#rows) {
      if (row.hasEmptySlots()) {
        return false
      }
    }
    return true
  }
}