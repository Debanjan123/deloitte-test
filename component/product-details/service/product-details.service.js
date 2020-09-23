const fetchProductDetails = () => {
  return new Promise((resolve, reject) => {
    fetch("/assets/data/product-details.json")
      .then((response) => {
        return resolve(response.json());
      })
      .then((json) => {
        return resolve(response.json());
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
export default fetchProductDetails;
