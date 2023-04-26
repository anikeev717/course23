const randomNumber = (minValue = 0, maxValue = 256) =>
  Math.floor(Math.random() * (maxValue - minValue) + minValue);

const randomColor = () =>
  `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

const createLamp = (
  root = document.querySelector(".lamp__lights"),
  size = 50,
  baseColor = "gray",
  color = randomColor(),
  interval = randomNumber(500, 5000)
) => {
  const lamp = document.createElement("div");
  let lampIntervalId;
  lamp.classList.add("lamp");
  lamp.style.width = `${size}px`;
  lamp.style.height = `${size}px`;
  lamp.style.background = baseColor;
  root.appendChild(lamp);

  const lampHandler = () => {
    lamp.style.background === baseColor
      ? (lamp.style.background = color)
      : (lamp.style.background = baseColor);
  };

  const startLampBlink = () => {
    lampIntervalId = setInterval(lampHandler, interval);
  };

  const stopLampBlink = () => {
    clearInterval(lampIntervalId);
  };

  lamp.addEventListener("click", lampHandler);
  lamp.addEventListener("mouseenter", stopLampBlink);
  lamp.addEventListener("mouseleave", startLampBlink);

  startLampBlink();
};

export { createLamp };
