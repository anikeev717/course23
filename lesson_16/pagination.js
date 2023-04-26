export class Pagination {
  constructor(root, totalPages, currentPage, onChange) {
    this.root = root;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.onChange = onChange;
  }

  render() {
    const existingDomElement = this.root.querySelector(".pagination");
    this.domElement = existingDomElement
      ? existingDomElement
      : document.createElement("div");
    this.domElement.innerHTML = "";
    this.domElement.classList.add("pagination");
    for (let i = 1; i <= this.totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      if (i === this.currentPage) {
        button.style.backgroundColor = "red";
      }
      button.addEventListener("click", () => {
        this.onChange(i);
      });
      this.domElement.append(button);
    }
    this.root.append(this.domElement);
  }
}
