// import "./components/lighter/lighter.js";
// import "./components/slideShow/slideShow.js";
import { flash } from "./components/lighter/lighter.js";
import { createSlideShow } from "./components/slideShow/slideShow.js";
import {
  createButton,
  createLink,
  BTN_TYPES,
} from "./components/button/button.js";
import { list } from "./components/list/list.js";

list(document.querySelector("main"), [
  "RUSSIA",
  "USA",
  "CANADA",
  "FRANCE",
  "GERMANY",
]);

list(document.querySelector("main"), ["RUB", "USD", "CAD", "EUR", "EUR"]);

createSlideShow(document.querySelector("#slideShow2"), 3000);
const btnsRoot = document.querySelector("header");
createButton(btnsRoot, undefined, undefined, () => {
  alert("Hello World");
});
createButton(btnsRoot, undefined, BTN_TYPES.WARN, () => {
  console.warn("Clicked");
});
createButton(btnsRoot, "Danger", BTN_TYPES.DANGER, () => {
  flash(document.querySelectorAll(".light__item"));
});
createButton(btnsRoot, "By NOW", BTN_TYPES.SUCCESS, () => {
  createSlideShow(document.querySelector("#slideShow1"), 5000);
});
createLink(btnsRoot, "Root", BTN_TYPES.SUCCESS, "../index.html");
