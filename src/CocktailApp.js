import { LitElement, html, css } from 'lit-element';
import { ComponentBusqueda } from './component-busqueda.js';

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
      <component-busqueda></component-busqueda>
    `;
  }
}
