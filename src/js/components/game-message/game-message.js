const template = document.createElement('template')

template.innerHTML = `
<style>
  :host,
  * {
    box-sizing: border-box;
  }
</style>
<div id="text">
  <slot></slot>
</div>
<button>OK</button>
`

customElements.define('game-message',
  /**
   * Represents a game-message HTML element.
   */
  class extends HTMLElement {
    #btn
    #abortController = new AbortController()

    /**
     * Creates an instance of current class.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#btn = this.shadowRoot.querySelector('button')
    }

    /**
     * Called when the element is connected
     * to the DOM. Adds neccessary event
     * listener.
     */
    connectedCallback () {
      this.#btn.addEventListener('click', this.#onClick, {
        signal: this.#abortController.signal
      })
    }

    /**
     * Called when the element is disconnected from
     * the DOM. Removes the eventlistener.
     */
    disconnectedCallback () {
      this.#abortController.abort()
    }

    /**
     * Called when the button is clicked.
     * Removes the current element from the shadow DOM.
     *
     * @param {PointerEvent} event - click
     */
    #onClick = (event) => {
      event.stopPropagation()
      this.remove()
    }
  }
)
