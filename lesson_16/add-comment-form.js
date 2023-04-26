const formChildrenTemplate = `

  <div class="add-comment-form__field">
    <input
      type="text"
      name="author"
      class="add-comment-form__native-input"
      placeholder="Name"
    />
  </div>
  <div class="add-comment-form__field">
  <input
    type="text"
    name="title"
    class="add-comment-form__native-input"
    placeholder="Title"
  />
</div>
  <div class="add-comment-form__field">
    <textarea
      name="text"
      class="add-comment-form__native-input"
      placeholder="Your comment"
    ></textarea>
  </div>
  <div class="add-comment-form__field">
    <input
      type="file"
      name="image"
      class="add-comment-form__btn add-comment-form__btn-upload"
    />
  </div>
  <div class="add-comment-form__field">
    <button class="add-comment-form__btn add-comment-form__btn-submit" type="submit">
      Add
    </button>
    <button class="add-comment-form__btn add-comment-form__btn-clear" type="reset">
      Clear
    </button>
  </div>
  `;

class AddCommentForm {
  constructor(root, url, onSuccessCallback) {
    this.root = root;
    this.onSuccessCallback = onSuccessCallback;
    this.url = url;
    this.init();
  }
  init() {
    this.render();
  }

  render() {
    this.formElement = document.createElement("form");
    this.formElement.classList.add("add-comment-form");
    this.formElement.innerHTML = formChildrenTemplate;
    this.formElement.addEventListener("submit", (e) => this.sendData(e));
    this.root.append(this.formElement);
  }

  sendData(e) {
    e.preventDefault();
    const formData = new FormData(this.formElement);
    fetch(this.url, {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Inside form", data);
        this.onSuccessCallback(data);
      });
    // for (let entry of formData.entries()) {
    //   console.log(entry);
    // }
    //JSON
    // const author = this.formElement[0].value;
    // const text = this.formElement[1].value;
    // const requestData = { author, text };
    // console.log(requestData);
  }
}

export { AddCommentForm };
