const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");

class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.control = new Controls();
  }

  update(ctx) {
    if (this.control.forward)
      this.y -= 2;

    if (this.control.reverse)
      this.y += 2;

    this.draw(ctx);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const car = new Car(100, 100, 30, 50);

function animate() {
  car.update(ctx);
  requestAnimationFrame(animate);
}

animate();






