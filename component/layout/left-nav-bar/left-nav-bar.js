import left_nav_bar_view from "./left-nav-bar.view.js";
const setup_left_nav_bar = () => {
  "use strict";

  class NavBar extends HTMLElement {
    constructor() {
      super();

      let content = "Stay awhile.";
      // Create a shadow root
      let shadow = this.attachShadow({ mode: "open" });

      // Create text node and add word count to it
      let text = document.createElement("div");
      text.className = "align-center";
      text.innerHTML = left_nav_bar_view();
      let style = document.createElement("style");
      style.textContent = `
      :host .align-center{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      `;

      // attach the created elements to the shadow dom
      shadow.appendChild(style);
      // Append it to the shadow root
      shadow.appendChild(text);
    }
  }

  customElements.define("nav-bar", NavBar);
};

export default setup_left_nav_bar;
