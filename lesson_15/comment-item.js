/*  <div class="comment">

    </div>
  */

const apiUrl = "http://localhost:4000";
export class CommentItem {
  /**
   *
   * @param {HTMLElement} root
   * @param {{title:string; author: string; avatarUrl: string; id: number; text: string}} data
   */
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("comment");
    this.domElement.innerHTML = `
        <h2 class="comment__title">${this.data.title}</h2>
        <p class="comment__text">${this.data.text}</p>
        <div class="comment__author">${this.data.author}</div>
        <img class="comment__avatar" src="${apiUrl}/${this.data.avatarUrl}">
    `;
    this.root.append(this.domElement);
  }
}
