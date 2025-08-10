//! ES5 emthod

// function Recangle(width, height) {
//   (this.width = width), (this.height = height);
// }

// Recangle.prototype.drow = function () {
//   console.log("I am Drowing...");
// };

// const r1 = new Recangle(20, 30);

// r1.drow();
// console.log(r1)

//! ES6 method

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;

//     this.anthor = function(){

//     }
//   }
//   name = "arafat";
//   test2 = function(){}

//   drow() {
//     console.log("Drowing... " + this.name);
//   }

//   test(){

//   }
// }

// const r1 = new Rectangle(10, 20);

// r1.drow();
// console.log(r1);

// console.log(typeof Rectangle);

// class Person {
//   constructor(name, email) {
//     (this.name = name), (this.email = email);
//   }

//   print() {
//     console.log(this.name, this.email);
//   }

//   test(){
//     console.log(this)
//   }

//   static create(json) {
//     const person = JSON.parse(json);

//     return new Person(person.name, person.email);
//   }
// }

// const str = `{"name": "Arfafat Nill", "email": "arafat@gmail.com"}`;

// let p1 = Person.create(str)
// console.log(p1)

// console.log(p1 instanceof Person)
// p1.print()

// let s2 = new Person()

// let c =s2.test
// c()

// "use strict"

// function Shape() {
//   this.drow = function () {
//     console.log(this);
//   };
// }

// const s1 = new Shape();

// const anathodDrow = s1.drow;

// anathodDrow();

//! hide proparty old way
// const _radius = Symbol()
// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   drow() {
//     console.log("Drowing...", this[_radius]);
//   }
// }

// let c1 = new Circle(2);
// c1.drow();

// console.log(c1.radius);

// class Circle {
//   #radius = 0;
//   constructor(radius) {
//     this.#radius = radius;
//   }

//   #drow() {
//     console.log("Drowing...", this.#radius);
//   }
//   display() {
//     console.log("Requsting to draw the circle...");
//     this.#drow();
//   }
// }

// let c1 = new Circle(2);
// c1.display();

// let key = Object.getOwnPropertyNames(c1);

// console.log(c1);

const _radious = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();

class Circle {
  constructor(radious, name) {
    this.size = 100;
    _radious.set(this, radious);
    _name.set(this, name);
    const resizes = _resize.set(this, () => {
      console.log(this.size);
    });
    resizes();
  }

  get radius() {
    return _radious.get(this);
  }

  set radius(v) {
    _radious.set(this, v);
  }

  draw() {
    console.log("Drawing...");
    console.log(_radious.get(this), _name.get(this));
    console.log(_resize.get(this));
  }
}

let c1 = new Circle(10, "Arafat");
c1.draw();
console.log(c1.radius);
