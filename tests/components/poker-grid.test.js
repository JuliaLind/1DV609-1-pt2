import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-grid'

describe('poker-grid', () => {
  it('poker-grid should be defined as a custom element', () => {
    expect(customElements.get('poker-grid')).toBeDefined()
  })

  describe('poker-grid shadow dom structure', () => {
    const pokerGrid = document.createElement('poker-grid')

    it('poker-grid should contain 25 slots for cards', () => {
      const actualQtySlots = pokerGrid.shadowRoot.querySelectorAll('.card-slot').length
      const expectedQtySlots = 25

      expect(actualQtySlots).toBe(expectedQtySlots)
    })

    it('poker-grid should contain 10 fields for results', () => {
      const actualQtyFields = pokerGrid.shadowRoot.querySelectorAll('.result-field').length
      const expectedQtyFields = 10

      expect(actualQtyFields).toBe(expectedQtyFields)
    })
  })
})
