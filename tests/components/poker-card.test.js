import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-card'

describe('poker-card', () => {
  it('poker-card should be defined as a custom element', () => {
    expect(customElements.get('poker-card')).toBeDefined()
  })
})
