import { describe, it, expect } from 'vitest'
import '../../src/js/components/poker-game'

describe('poker-game', () => {
  it('poker-game should be defined as a custom element', () => {
    expect(customElements.get('poker-game')).toBeDefined()
  })
})
