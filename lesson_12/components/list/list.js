const list = (root, options = []) => {
  const listContainer = document.createElement("div");
  const toggleButton = document.createElement("button");
  const ul = document.createElement("ul");
  listContainer.classList.add("select");
  toggleButton.classList.add("select__toggle");
  ul.classList.add("select__list");

  for (let i = 0; i < options.length; i++) {
    const li = document.createElement("li");
    li.addEventListener("click", () => {
      toggleButton.textContent = options[i];
      listContainer.classList.toggle("active");
    });
    li.textContent = options[i];
    li.classList.add("list__item");
    ul.appendChild(li);
  }
  toggleButton.addEventListener("click", () => {
    listContainer.classList.toggle("active");
  });
  toggleButton.textContent = "Open..";
  listContainer.appendChild(toggleButton);
  listContainer.appendChild(ul);
  root.appendChild(listContainer);
};

export { list };
