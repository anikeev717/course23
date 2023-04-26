const createPost = (root, title, content) => {
  const post = document.createElement("div");
  const postTitle = document.createElement("h1");
  const postContent = document.createElement("p");

  post.classList.add("post");
  postTitle.classList.add("post__title");
  postContent.classList.add("post__content");
  postTitle.textContent = title;
  postContent.textContent = content;

  post.appendChild(postTitle);
  post.appendChild(postContent);
  root.appendChild(post);

  postTitle.addEventListener("click", () => {
    postContent.classList.toggle("active");
  });
};

export { createPost };
