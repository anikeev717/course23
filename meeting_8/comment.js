class Comment {
  constructor(root, data) {
    this.root = root;
    this.data = data;
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("comment-card");
    this.domElement.id = this.data.id;
    const { title, content, avatarUrl, author } = this.data;
    // const { title, content, avatarUrl, author } = this.data;

    const template = `
      <figure class="comment-card__autor">
        ${
          avatarUrl
            ? `<img src="${avatarUrl}"alt="" class="comment-card__img"/>`
            : `<img src="./assets/img/img.png" alt="" class="comment-card__img"/>`
        }
        <figcaption class="comment-card__name">${author}</figcaption>
      </figure>
      <div class="comment-card__description">
        <h2 class="comment-card__title">${title}</h2>
        <p class="comment-card__post">${content}</p>
        <span class="comment-card__date">20:30 23/12/2020</span>
      </div>
    `;

    this.domElement.innerHTML = template;
    this.root.append(this.domElement);
  }
}
export { Comment };
