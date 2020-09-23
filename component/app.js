import setup_top_bar from "./layout/top-bar/top-bar.js";
import setup_left_nav_bar from "./layout/left-nav-bar/left-nav-bar.js";
import router from "./app.route.js";
import paginator from "./paginator/paginator.js"
const ngOninit = ()=>{
    setup_top_bar();
    setup_left_nav_bar();
    paginator();
}

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

