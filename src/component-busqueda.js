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
      <input type="text" id="inputbusca"  placeholder="introduce tu cocktail"></input>
      <button @click=${this._busquedacocktail}>buscar</button>
    `;
  }

  _busquedacocktail(e){
    const input = this.shadowRoot.getElementById('inputbusca');
    const text = input.value;
    input.value = "";
    console.log(text);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
    .then(response =>{
        if(response.status !== 200){
            console.log(`Hubo un problema: ${response.status}`);
            return;
        }
        response.json().then(data =>{
            console.log(data);
        });
    })
    .catch(err =>{
        console.log(`Error: ${err}`);
    });
  }



}
customElements.define('component-busqueda', ComponentBusqueda);