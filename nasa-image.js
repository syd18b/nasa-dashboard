import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class nasaImage extends DDDSuper(LitElement) {
  constructor() {
    super();
    this.title = "Moon";
    this.owner = "your mom";
    this.source =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg";
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      owner: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host:hover {
          background-color: red;
        }
        .image:hover {
          display: inline-block;
          background-color: lightblue;
        }

        .image div {
          max-width: 200px;
          font-size: 16px;
          font-weight: bold;
        }

        .image img {
          display: block;
          width: 240px;
        }
        a {
          padding: 4px;
          border: 2px solid pink;
          display: inline-block;
        }
        a:hover {
          max-width: 240px;
          background-color: lightblue;
        }
      `,
    ];
  }

  render() {
    return html`
      <a class="image" href=${this.source} target="_blank">
        <img src="${this.source}" alt="${this.title}" />

        <div>${this.title}</div>
        <div>${this.owner}</div>
      </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(nasaImage.tag, nasaImage);
