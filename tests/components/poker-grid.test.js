import { describe, it, expect } from 'vitest'
import '../../src/components/poker-grid'

describe('poker-grid', () => {
  it('poker-grid should be defined as a custom element', () => {
    expect(customElements.get('poker-grid')).toBeDefined()
  })

  it('poker-grid should contain slots for cards and for results', () => {
    const pokerGrid = document.createElement('poker-grid')
    const shadowRoot = pokerGrid.shadowRoot
    expect(shadowRoot.querySelectorAll('.card-slot').length).toBe(25)
    expect(shadowRoot.querySelectorAll('.result-slot').length).toBe(10)
    expect(shadowRoot.querySelectorAll('[data-row="0"]').length).toBe(6)
    expect(shadowRoot.querySelectorAll('[data-column="0"]').length).toBe(6)
  })
})