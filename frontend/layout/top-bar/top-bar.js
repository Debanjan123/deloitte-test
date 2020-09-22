import top_bar_view from "./top-bar-view.js";
const setup_top_bar = () => {
  "use strict";

  class TopBar extends HTMLElement {
    constructor() {
      super();

      let content = "Stay awhile.";
      // Create a shadow root
      let shadow = this.attachShadow({ mode: "open" });

      // Create text node and add word count to it
      let text = document.createElement("div");
      text.innerHTML = top_bar_view();
      let style = document.createElement("style");
      style.textContent = `
   
      
.topnav {
    
    overflow: hidden;
    display: flex;
    align-items: center;
    margin:0px;
    padding:0px;
  }
  .mr0{
    margin:0px
  }
  .pd0{
    padding:0px !important;
  }
  .icon-color{
    color: #1D2547;
  }
  /*------------------------------------------------------------------
[ Input ]*/
/*---------------------------------------------*/
input {
	outline: none;
	border: none;
}
.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  
}

.label-input100 {
  font-family: Poppins-Regular;
  font-size: 13px;
  color: #666666;
  line-height: 1.5;
  padding-left: 5px;
}

.input100 {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #333333;
  line-height: 1.2;
  padding: 0 5px;
}

.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background:#efd164;;
}


/*---------------------------------------------*/
input.input100 {
  height: 40px;
}


textarea.input100 {
  min-height: 110px;
  padding-top: 9px;
  padding-bottom: 13px;
}


.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

  :host .material-icons{
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
.fixed-menu{
  position: fixed;
    width: 100%;
    top: 0px;
    z-index:1;
}  
  .align-items-center {
    align-items: center;
  }
  .margin-left-auto{
    margin-left:auto;
  }
  .d-flex{
    display:flex;
  }
  .img-container{
    padding-left:4px;
  }
  img{
    height: 60px;
    width: 60px;
  }
  .topnav li a:hover {
    background-color: #fff;
    color: #143ff5;;
}
  .topnav li a{
    color: #1D2547;
    font-weight: 500;
    font-size: 15px;
    font-family: "Poppins",sans-serif;
    font-family: "Poppins",sans-serif;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    text-transform: uppercase;
    text-decoration: none;
  }
  .topnav li{
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding-right: 43px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  .bg-white{
    background:white;
  }
  
  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }
  
  .topnav .icon {
    display: none;
  }
  
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    
  }
          `;

      // attach the created elements to the shadow dom
      shadow.appendChild(style);
      // Append it to the shadow root
      shadow.appendChild(text);
    }
  }
  //   // Define the new element
  // myFunction(){
  // alert();
  //   }

  customElements.define("top-bar", TopBar);
};

export default setup_top_bar;
