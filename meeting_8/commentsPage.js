import { Comment } from "./comment.js";

class CommentsPage {
  constructor(root) {
    this.root = root;
    this.url = "./assets/json/posts.json";
    this.comments = [];
  }

  fetchData() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        this.comments = data;
        this.render();
      })
      .catch((e) => console.error(e));
  }

  render() {
    this.domElement = document.createElement("div");
    this.domElement.classList.add("comments");
    this.comments.forEach((comment) => {
      const commentItem = new Comment(this.domElement, comment);
      commentItem.render();
    });
    this.root.append(this.domElement);
  }
}

export { CommentsPage };
