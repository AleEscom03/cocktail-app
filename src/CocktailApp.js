import { LitElement, html, css } from 'lit-element';
import 'home-lit/home-lit.js';
import 'login-comp/login-comp.js';
import "cocktail-container/cocktail-container.js";
import 'search-component/search-component';
import 'dile-modal/dile-modal.js';


export class CocktailApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      isLogin: { type: Boolean },
      user: { type: String },
      infoModal: { type: Object }
    };
  }

  static get styles() {
    return css`
    dile-modal p{
      font-weight: bold;
      color: black;
    }
    `;
  }

  constructor() {
    super();
    this.isLogin = false;
    this.user = '';
    this.infoModal = {};
  }

  render() {
    return html`
      ${!this.isLogin ?
        html`<login-comp @login="${this._login}">login</login-comp>` :
        html`<h2>¡Bienvenido! ${this.user}</h2>
        <search-component @info-loaded="${this.showModal}"></search-component>
        <cocktail-container></cocktail-container>
        <dile-modal id="modal">
          <img width="250em" src=${this.infoModal.strDrinkThumb}>
          <p class="Name">${this.infoModal.strDrink}</p>
          <p>Ingredients</p>
          <ul>
          ${this.infoModal.arrIngredients?.map((i) => html`${i ? html`<li>${i}</li>` : html``}`)}
          </ul>
          ${
          this.infoModal.strInstructions ? html`
              <p>Preparation</p>
              <label>${this.infoModal.strInstructions}</label>
            ` : html``
          }
        </dile-modal>
        `
      }
    `;
  }

  showModal(e) {
    if (e.detail.drinks != null) {
      this.infoModal = e.detail.drinks[0];
      let arrIngredients = [];
      arrIngredients.push(this.infoModal.strIngredient1);
      arrIngredients.push(this.infoModal.strIngredient2);
      arrIngredients.push(this.infoModal.strIngredient3);
      arrIngredients.push(this.infoModal.strIngredient4);
      arrIngredients.push(this.infoModal.strIngredient5);
      arrIngredients.push(this.infoModal.strIngredient6);
      arrIngredients.push(this.infoModal.strIngredient7);
      arrIngredients.push(this.infoModal.strIngredient8);
      arrIngredients.push(this.infoModal.strIngredient9);
      arrIngredients.push(this.infoModal.strIngredient10);
      arrIngredients.push(this.infoModal.strIngredient11);
      arrIngredients.push(this.infoModal.strIngredient12);
      arrIngredients.push(this.infoModal.strIngredient13);
      arrIngredients.push(this.infoModal.strIngredient14);
      arrIngredients.push(this.infoModal.strIngredient15);
      this.infoModal.arrIngredients = arrIngredients;
      this.shadowRoot.getElementById("modal").open();
    }else{
      alert("No hay resultados.");
    }
  }

  _login(e) {
    this.isLogin = e.detail.access;
    this.user = e.detail.user;
  }
}
