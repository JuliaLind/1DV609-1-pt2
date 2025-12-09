const template = document.createElement('template')

template.innerHTML = `
<style>
  :host,
  * {
    box-sizing: border-box;
  }

  :host {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid var(--poker-green);
    border-radius: 1rem;
    background-color: var(--white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem;

    width: fit-content;
    height: fit-content;

    font-family: 'Arial', sans-serif;
    font-size: 1.3rem;
    color: var(--dark-poker-green);
  }

  button {
    background: var(--poker-green);
    color: var(--white);
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    box-shadow: 0 3px 0 #003300;
    transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.1s ease;
  }

  button:hover {
    background: var(--light-poker-green);
  }

  button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #003300;
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
