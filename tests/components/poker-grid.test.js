import { describe, it, expect } from 'vitest'
import '../../src/components/poker-grid'

describe('poker-grid', () => {
  it('poker-grid should be defined as a custom element', () => {
    expect(customElements.get('poker-grid')).toBeDefined()
  })
})