// const red = document.getElementById("redLight");
// const yellow = document.getElementById("yellowLight");
// const green = document.getElementById("greenLight");
// const redHandler = () => {
//   red.style.background = "red";
//   yellow.style.background = "none";
//   green.style.background = "none";
// };
// const yellowHandler = () => {
//   red.style.background = "none";
//   yellow.style.background = "yellow";
//   green.style.background = "none";
// };
// const greenHandler = () => {
//   red.style.background = "none";
//   yellow.style.background = "none";
//   green.style.background = "green";
// };

// red.addEventListener("click", redHandler);
// yellow.addEventListener("click", yellowHandler);
// green.addEventListener("click", greenHandler);

const lights = document.querySelectorAll(".light__item");

const flash = () => {
  lights.forEach((element) =>
    element.addEventListener("click", () => {
      element.classList.toggle("light__item-active");
    })
  );
};

flash();
