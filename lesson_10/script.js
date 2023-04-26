randomNumber = (value = 256) => Math.floor(Math.random() * value);

randomColor = () =>
  `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

console.log(randomColor());

const coolButton = document.getElementsByClassName("button")[0];
const openButton = document.getElementById("openmodal");
const closeButton = document.getElementById("closemodal");
const modal = document.getElementsByClassName("modal")[0];

clickHandler = () => {
  coolButton.style.background = randomColor();
  coolButton.classList.toggle("active");
  coolButton.textContent = randomNumber();
};

openHandler = () => {
  modal.classList.toggle("modal-active");
};

coolButton.addEventListener("click", clickHandler);
openButton.addEventListener("click", openHandler);
closeButton.addEventListener("click", openHandler);