import { createProductList } from "./productsList.js";

const createGrid = (root = document.querySelector("body")) => {
  fetch("./assets/json/shop.json")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createProductList(root, data.products);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { createGrid };
