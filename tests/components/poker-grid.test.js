import { describe, it, expect, afterEach, beforeEach, afterAll } from 'vitest'
import '../../src/js/components/poker-grid'

describe('poker-grid', () => {
  it('poker-grid should be defined as a custom element', () => {
    expect(customElements.get('poker-grid')).toBeDefined()
  })

  describe('shadow DOM structure', () => {
    const pokerGrid = document.createElement('poker-grid')
    const shadowRoot = pokerGrid.shadowRoot

    it('poker-grid should contain slots for results', () => {
      expect(shadowRoot.querySelectorAll('.result-slot').length).toBe(10)
    })

    it('poker-grid should contain slots for cards', () => {
      expect(shadowRoot.querySelectorAll('.card-slot').length).toBe(25)
    })
  })


  describe('slot-click event', () => {
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

    it('slot-click event detail should contain correct row and column', () => {
      let eventDetail = null
      pokerGrid.addEventListener('slot-click', (event) => {
        eventDetail = event.detail
      })
      cardSlot.click()
      expect(eventDetail).toEqual({ row: 2, column: 1 })
    })

    it('clicking outside a card slot should not dispatch slot-click event', () => {
      let eventDispatched = false

      pokerGrid.addEventListener('slot-click', () => {
        eventDispatched = true
      })

      pokerGrid.shadowRoot.querySelector('.result-slot').click()

      expect(eventDispatched).toBe(false)
    })
  })


})