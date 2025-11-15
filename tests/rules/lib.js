/**
 * Mocks the get attribute implementation for a poker card.
 * If attribute name is 'rank', it returns the provided value.
 *
 * @param {string} value - the rank value to return
 * @returns the rank value
 */
export function getAttributeMock(value) {
  return (name) => {
    if (name === 'rank') {
      return value
    }

    throw new Error(`Unexpected attribute requested: ${name}`)
  }
}