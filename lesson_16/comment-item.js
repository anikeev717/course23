const apiUrl = "http://localhost:4000";
export class CommentItem {
  /**
   *
   * @param {HTMLElement} root
   * @param {{title:string; author: string; avatarUrl: string; id: number; text: string}} data
   */
  constructor(root, data, onDelete) {
    this.root = root;
    this.data = data;
    this.onDelete = onDelete;
    this.render();
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("comment");
    this.domElement.id = this.data.id;
    this.domElement.innerHTML = `
        <h2 class="comment__title">${this.data.title}</h2>
        <p class="comment__text">${this.data.text}</p>
        <div class="comment__author">${this.data.author}</div>
        <img class="comment__avatar" src="${this.data.avatarUrl}">
    `;
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      // this.root.removeChild(this.domElement);
      this.onDelete(this.data.id);
    });
    button.textContent = "Delete";
    this.domElement.append(button);
    this.root.append(this.domElement);
  }
}
