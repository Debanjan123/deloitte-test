const fetchProductList = () => {
  return new Promise((resolve, reject) => {
    fetch("/assets/data/productList.json")
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
export default fetchProductList;
