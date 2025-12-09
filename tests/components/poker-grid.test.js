import { describe, it, expect, beforeEach, afterEach } from 'vitest'
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

  describe('poker-grid slot click event', () => {
    let pokerGrid
    let cardSlot

    beforeEach(() => {
      pokerGrid = document.createElement('poker-grid')
      document.body.appendChild(pokerGrid)
      const shadowRoot = pokerGrid.shadowRoot
      cardSlot = shadowRoot.querySelector('.card-slot[data-row="2"][data-column="1"]')
    })

    afterEach(() => {
      pokerGrid.remove()
    })

    it('slot-click event should be dispatched when clicking on a card slot', () => {
      let eventDispatched = false

      pokerGrid.addEventListener('slot-click', () => {
        eventDispatched = true
      })
      cardSlot.click()

      expect(eventDispatched).toBe(true)
    })

    it('slot-click event should not be dispatched when clicking on a result field', () => {
      let eventDispatched = false

      pokerGrid.addEventListener('slot-click', () => {
        eventDispatched = true
      })

      const resultField = pokerGrid.shadowRoot.querySelector('.result-field')
      resultField.click()

      expect(eventDispatched).toBe(false)
    })

  })
})
