import { LitElement, html, css } from "lit-element";
import "cocktail-container/cocktail-container.js";

export class CocktailApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <h1>APP de Cocteles</h1>
      <cocktail-container></cocktail-container>
    `;
  }
}
