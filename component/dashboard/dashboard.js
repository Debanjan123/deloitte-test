import AbstractView from "../static/js/views/AbstractView.js";
import dashboardHTML from "./dashboard.view.js";
import fetchProductList from "./service/dashboard.service.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return fetchProductList()
      .then((res) => {
        this.productList = res;
        dashboardHTML.bind(this);
        return dashboardHTML(this);
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}
