/**
 * Mocks the getAttribute implementation for a poker card.
 * If attribute is in the attributes object,
 * it returns the corresponding value.
 *
 * @param {object} attributes - attributes
 * @returns a function that mocks getAttribute
 */
export function getAttributeMock(attributes) {
  return (name) => {
    for (const [attribute, value] of Object.entries(attributes)) {
      if (name === attribute) {
        return value
      }
    }

    throw new Error(`Unexpected attribute requested: ${name}`)
  }
}