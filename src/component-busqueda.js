import { LitElement, html, css } from 'lit-element';

export class ComponentBusqueda extends LitElement {
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
      <h1>componente de busqueda</h1>
      <input type="text" id="inputbusca"  placeholder="introduce tu cocktail"></input>
      <button @click=${this._busquedacocktail}>buscar</button>
    `;
  }

  _busquedacocktail(e){
    const input = this.shadowRoot.getElementById('inputbusca');
    const text = input.value;
    console.log(text);
  }

}
customElements.define('component-busqueda', ComponentBusqueda);