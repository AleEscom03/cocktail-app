import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import 'home-lit/home-lit.js';
import 'login-comp/login-comp.js';

export class CocktailApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      isLogin: {type: Boolean},
      user: { type: String},
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor(){
    super();
    this.isLogin = false;
    this.user = '';
  }

  render() {
    return html`
      ${!this.isLogin ?
        html`<login-comp @login="${this._login}">login</login-comp>` :
        html`<home-lit .user="${this.user}"></home-lit>`
      }
    `;
  }

  _login(e){
    this.isLogin = e.detail.access;
    this.user = e.detail.user;
    console.log(this.isLogin);
    console.log(this.user);
  }
}
