class Car {
  constructor(root, color, speed, fuel) {
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
    this.intervalId = null;
    this.root = root;
    this.render();
  }
  render() {
    this.domElement = document.createElement("div");
    this.domElement.style.width = "20px";
    this.domElement.style.height = "20px";
    this.domElement.style.background = this.color;
    this.domElement.style.position = "absolute";
    this.domElement.style.left = "0px";
    this.root.append(this.domElement);
  }

  move() {
    this.intervalId = setInterval(() => {
      if (this.fuel > 0) {
        const currentLeft = parseInt(this.domElement.style.left);
        console.log(currentLeft);
        this.domElement.style.left = `${currentLeft + 10}px`;
        this.fuel--;
      } else {
        console.log("Fuel empty");
        clearInterval(this.intervalId);
      }
    }, this.speed);
  }

  stop() {
    clearInterval(this.intervalId);
    console.log("Car stopped");
  }

  setFuel(fuelCount) {
    this.fuel = fuelCount;
  }
}

export { Car };
