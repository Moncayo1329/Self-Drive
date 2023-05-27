class Car {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

  this.control=new Controls();
    }





    
    draw(ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const car = new Car(100, 100, 30, 50);
car.draw(ctx);

