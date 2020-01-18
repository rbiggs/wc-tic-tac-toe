import {LitElement, html, css} from 'https://unpkg.com/lit-element?module'

class AppHeader extends LitElement {
  render() {
    return html`
      <style>
        h1 {
          color: #fff;
          margin: 0;
          font: 2.5rem Futura, sans-serif;
        }
      </style>
      <nav>
        <h1>WC Tic-Tac-Toe</h1>
      </nav>
    `
  }
}

customElements.define('app-header', AppHeader)
