import { randomNumber } from "./utils.js";
import "./other.scss";

export const randomColor = () =>
  `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
