import { LitElement, html, css } from 'lit-element';
import 'search-component/search-component';

export class CocktailApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <h1>APP de Cocteles</h1>
      <search-component></search-component>
    `;
  }
}
