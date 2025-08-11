class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("Drawing...");
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calclute() {
    console.log(this.width * this.height);
  }

  draw() {
    console.log("Drawing a Recatangle....");
  }
}

let r1 = new Rectangle("green", 10, 40);
console.log(r1);
r1.calclute();
r1.draw();
