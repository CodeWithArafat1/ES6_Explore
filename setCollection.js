// shob kichui value kono key nai

const set = new Set([1, 2, 3]);
set.add(12);
set.add(13);

//? age theke kono value thakle oita she skip korbe
set.add(1);
set.add(2);

// console.log(set);
// console.log(set.size);

// set.clear()
// set.delete(2)
// console.log(set.has(5))//? value ase ki na check kore

// console.log(set.values())

function isIterable(obj) {
  return typeof obj[Symbol.iterator] === "function";
}

console.log(isIterable([]));
console.log(isIterable({}));
console.log(isIterable(4));
console.log(isIterable("arafat"));

console.log(set);

let keyIt = set.keys();
console.log(keyIt.next());
// console.log(isIterable(set))

for (let v of set) {
  console.log(v);
}
