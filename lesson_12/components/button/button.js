const BTN_TYPES = {
  SUCCESS: "success",
  WARN: "warn",
  DANGER: "danger",
};

const createElement = (
  tagName = "button",
  text = "Click Me",
  type = BTN_TYPES["SUCCESS"]
) => {
  const btn = document.createElement(tagName);
  btn.classList.add("btn");
  btn.classList.add(`btn_${type}`);
  btn.textContent = text;
  return btn;
};

const createButton = (
  root,
  text = "Click Me",
  type = BTN_TYPES["SUCCESS"],
  onClickHandler = () => console.log("PROVIDE CB FN")
) => {
  const el = createElement("button", text, type);
  el.addEventListener("click", onClickHandler);
  root.appendChild(el);
};

const createLink = (
  root,
  text = "Click Me",
  type = BTN_TYPES["SUCCESS"],
  href = "#"
) => {
  const el = createElement("a", text, type);
  el.setAttribute("href", href);
  root.appendChild(el);
};

export { createButton, BTN_TYPES, createLink };
