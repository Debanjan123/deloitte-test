import setup_top_bar from "./layout/top-bar/top-bar.js";
import setup_left_nav_bar from "./layout/left-nav-bar/left-nav-bar.js";
import router from "./app.route.js";
import paginator from "./paginator/paginator.js";
import DashboardComponent from "./dashboard/dashboard.js";
import ProductDetailsComponent from "./product-details/product-details.js";

const ngOninit = () => {
  setup_top_bar();
  setup_left_nav_bar();
  paginator();
  customElements.define("dashboard-layout", DashboardComponent);
  customElements.define("product-details", ProductDetailsComponent);
};

ngOninit();
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
