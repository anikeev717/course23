import { Car } from "./car.js";
import { Cart } from "./cart.js";
import { Driver } from "./driver.js";
import { Product } from "./product.js";
import { ProductList } from "./productList.js";

const body = document.querySelector("body");

const cart = new Cart(body);
const productList = new ProductList(body, cart);
productList.fetchData();
