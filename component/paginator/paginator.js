import paginator_view from "./paginator-view.js";
const paginator = () => {
  "use strict";

  class Paginator extends HTMLElement {
    constructor() {
      super();

      let content = "Stay awhile.";
      // Create a shadow root
      let shadow = this.attachShadow({ mode: "open" });

      // Create text node and add word count to it
      let text = document.createElement("div");
      text.innerHTML = paginator_view();
      let style = document.createElement("style");
      style.textContent = `
   
      .pagination {
        display: inline-block;
      }
      
      .pagination a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
      }
      
      .pagination a.active {
        background-color: #1D2547;
        color: white;
      }
          `;

      // attach the created elements to the shadow dom
      shadow.appendChild(style);
      // Append it to the shadow root
      shadow.appendChild(text);
    }
  }

  customElements.define("paginator-view", Paginator);
};

export default paginator;
