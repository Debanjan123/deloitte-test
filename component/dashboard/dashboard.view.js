const dashboardHTML = (product) => {
  return `<div class="new-arrival">
  <div class="container">
      <!-- Section tittle -->

      <div class="row">
          ${generate(product)}
         
        
      </div>
     

  </div>
  <paginator-view></paginator-view> 
</div>`;
};

const generate = (product) => {
  let dyncamicHtml = "";
  product.productList.data.forEach((element) => {
    dyncamicHtml =
      dyncamicHtml +
      `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mr-b-10">
            <div class="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
               <div class="popular-img">
                  <img src="assets/images/${product.getCellValue(
                    element,
                    "imageUrl"
                  )}" alt="">
               </div>
               <div class="popular-caption">
                  <div class="d-flex align-item-center" >
                     <b class=" label-text cursor-pointer product-name">
                     <a class="product cursor-pointer" style="background-color:white;color: #1D2547;"
                     href="/product-details/${product.getCellValue(
                       element,
                       "productId"
                     )}" data-link>${product.getCellValue(
        element,
        "productName"
      )}</a></b>
                  </div>
                  <div class="d-flex align-item-center" >
                     <b class="launge label-text">LOUNGE</b>
                     <div class="mr-l-auto"><label class="label-text mr0" style="font-weight:100">${product.getCellValue(
                       element,
                       "productPrice"
                     )}</label>
                     </div>
                  </div>
                  <div class="d-flex align-item-center" style="
                     ">
                     <div class="rating mb-10">
                        ${setStar(product.getCellValue(element, "rating"))}
                     </div>
                     <div class="mr-l-auto">
                        <div class="nav-search search-switch d-flex icon-color ">
                           <span class="material-icons cursor-pointer" style="font-size:23px">
                           add_shopping_cart
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>`;
  });
  return dyncamicHtml;
};

const setStar = (rating) => {
  let ratingHTML = "";
  for (let i = 0; i < 5; i++) {
    let setHTML =
      i + 1 <= rating
        ? `<span class="material-icons">
      star
      </span>`
        : `<div class="material-icons">
      star_border
      </div>`;
    ratingHTML = ratingHTML + setHTML;
  }
  return ratingHTML;
};
export default dashboardHTML;
