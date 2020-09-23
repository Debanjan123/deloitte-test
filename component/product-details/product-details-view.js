const product_detailsHTML = (parent) => {
  return `<main class="container">
  <!-- Left Column / Headphones Image -->
  <div class="left-column">
     <img data-image="red" class="active" src="/assets/images/${parent.getCellValue(
       parent.productDetails,
       "selectedImageDetails"
     )}" height=500 widht=500 alt="">
  </div>
  <!-- Right Column -->
  <div class="right-column">
  <!-- Product Description -->
  <div class="product-description">
     <span>${parent.getCellValue(parent.productDetails, "productType")}</span>
     <h1>${parent.getCellValue(parent.productDetails, "productName")}
     </h1>
     <p>${parent.getCellValue(parent.productDetails, "productDescription")}
     </p>
  </div>
  <!-- Product Configuration -->
  <div class="product-configuration">
     <!-- Product Color -->
     <div class="product-color">
        <span>Color</span>
        <div class="color-choose">
           <div>
              <input data-image="red" type="radio" id="red" name="color" value="red" checked>
              <label for="red"><span></span></label>
           </div>
           <div>
              <input data-image="blue" type="radio" id="blue" name="color" value="blue">
              <label for="blue"><span></span></label>
           </div>
           <div>
              <input data-image="black" type="radio" id="black" name="color" value="black">
              <label for="black"><span></span></label>
           </div>
        </div>
     </div>
     <!-- Product Pricing -->
     <b class="launge label-text">Price per unit</b>
     <div class="product-price">
        <span>${parent.getCellValue(
          parent.productDetails,
          "productPrice"
        )}</span>
        <button type="button" class="btn btn-dark custom-btn">BUY NOW</button>
        < span class = "material-icons add-to-card-color" >
        add_shopping_cart </span>
     </div>
  </div>
</main>`;
};
export default product_detailsHTML;
