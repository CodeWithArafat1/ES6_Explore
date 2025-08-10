//! make iteraator

// const obj = {
//   start: 1,
//   end: 3,

//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     let self = this;
//     return {
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue > self.end ? undefined : currentValue++,
//         };
//       },
//     };
//   },
// };

// const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//! map collection

// const map = new Map([
//   ["a", 20],
//   ["b", 21],
//   ["c", 51],
// ]);

// map.delete("a");
// console.log(map.entries());
// console.log(map.get("c"));

// console.log(map);

// map.forEach((value, key) => {
//   console.log(value, key);
// });

//! set collection
// const set = new Set([1, 2, 3, 4]);

// set.add(5);
// set.clear();

// console.log(set);

// for (let v of set) {
//   console.log(v);
// }

//! weak map

// const a = { name: "Arafat" },
//   b = { age: 21 };

// const weakSet = new WeakSet([a, b]);

// console.log(weakSet.has(a));


//! privet proparty using Weak map
// const _radious = new WeakMap();
// const _name = new WeakMap();
// const _resize = new WeakMap();

// class Circle {
//   constructor(radious, name) {
//     this.size = 100;
//     _radious.set(this, radious);
//     _name.set(this, name);

//     _resize.set(this, () => {
//       console.log(this.size);
//     });
//   }

//   draw() {
//     console.log("Drawing...");
//     console.log(_radious.get(this), _name.get(this));
//     _resize.get(this)();
//   }
// }

// const c1 = new Circle(20, "arafat");

// c1.draw();
