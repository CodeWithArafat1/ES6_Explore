//! weakmap
let a = { name: "arafat" },
  b = { age: 21 };

let weakMap = new WeakMap([
  [a, 45],
  [b, 50],
]);

// weakMap.set(a, "Nill");
a = null

console.log(weakMap.get(a));
console.log(weakMap.has(b))


const arr = [1,2,3,4,5]


const it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())