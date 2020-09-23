import AbstractView from "../static/js/views/AbstractView.js";
import product_detailsHTML from "./product-details-view.js";
import fetchProductDetails from "./service/product-details.service.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Posts");
  }

  async getHtml() {
    return fetchProductDetails()
      .then((res) => {
        this.productDetails = res.data.filter((details) => {
          return details.productId === this.postId;
        })[0];
        this.productDetails.selectedImageDetails = this.productDetails.images.filter(
          (res) => {
            return res.isPrimary;
          }
        )[0].imageUrl;
        return product_detailsHTML(this);
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}
