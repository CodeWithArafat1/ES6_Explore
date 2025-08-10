//? 151. Iterator Basics in Javascript | JS All You Need To Know | JS Bangla Tutorials

// const arr = [1, 2, 3];

//! ES5 method
// function createItarator(collection) {
//   let i = 0;

//   return {
//     next() {
//       return {
//         done: i >= collection.length,
//         value: collection[i++],
//       };
//     },
//   };
// }

//! ES6 method
// const str = "TEXT";
// const itarate = str[Symbol.iterator]();

// console.log(itarate.next());

//! object is not iterable but we can do this with custom iterator
// let obj = {
//   start: 1,
//   end: 5,

//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
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

// // for (let v of obj) {
// //   console.log(v);
// // }

// let iterate = obj[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// //? try my self
// const myObj = {
//   name: "arafat",
//   age: 21,

//   [Symbol.iterator]: function () {
//     let i = 0;
//     const currentValue = this.age;

//     return {
//       next() {
//         return {
//           done: i >= currentValue.length,
//           value: currentValue[i++],
//         };
//       },
//     };
//   },
// };

// const itar = myObj[Symbol.iterator]();

// console.log(itar.next());

// for(let i of myObj){
//     console.log(i)
// }

// const obj = {
//   start: 1,
//   end: 3,

//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
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

// const arr = [1, 2, 3];

// function myIterator(collection) {
//   let i = 0;

//   return {
//     next() {
//       return {
//         done: i > collection,
//         value: collection[i++],
//       };
//     },
//   };
// }

// const itar = obj[Symbol.iterator]();

// console.log(itar.next());
// console.log(itar.next());
// console.log(itar.next());
// console.log(itar.next());

// const arr = [1, 2, 3, 4, 5];

// for (let v of arr) {
//   console.log(v);
// }

// for (let v of "Arafat") {
//   console.log(v);
// }

//! this is genaraator  just use *

// let obj = {
//   a: 1,
//   b: 10,

//   [Symbol.iterator]: function* () {
//     let cruuentValue = this.a;

//     while (cruuentValue <= this.b) {
//       yield cruuentValue++;
//     }
//   },
// };

// const iterat = obj[Symbol.iterator]();

// console.log(iterat.next());
// console.log(iterat.next());
// console.log(iterat.next());

// for (let v of obj) {
//   console.log(v);
// }

// function* genarate() {
//   const obj = {
//     start: 1,
//     end: 3,

//     [Symbol.iterator]: function* () {
//       let start = this.start;
//       while (start <= this.end) {
//         yield start++;
//       }
//     },
//   };

//   yield* obj;
// }

// let it = genarate();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const arr = [1, 2, 3];

// function* genarator(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     yield arr[i];
//   }
// }

// const it = genarator(arr);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());



// একটি কাল্পনিক API কল যা পেজ নম্বর অনুযায়ী প্রোডাক্ট দেয়
async function fetchProductsByPage(pageNumber) {
  console.log(`\nfetching page ${pageNumber}...`);
  // বাস্তবে এখানে fetch() ব্যবহার করা হবে
  // আমরা এখানে একটি ডেমো ডেটা সিমুলেট করছি
  const products = [
    { id: pageNumber * 10 + 1, name: `Product ${pageNumber * 10 + 1}` },
    { id: pageNumber * 10 + 2, name: `Product ${pageNumber * 10 + 2}` },
  ];

  // যদি পেজ নম্বর ৩ এর বেশি হয়, তাহলে আর কোনো প্রোডাক্ট নেই বলে ধরে নিচ্ছি
  if (pageNumber > 3) {
    return [];
  }
  return products;
}

// আমাদের জেনারেটর ফাংশন
async function* productFetcher() {
  let currentPage = 1;
  while (true) {
    const products = await fetchProductsByPage(currentPage);
    if (products.length === 0) {
      // যখন আর কোনো প্রোডাক্ট পাওয়া যাবে না, লুপ ব্রেক করবে
      break;
    }
    // yield* দিয়ে অ্যারের প্রতিটি প্রোডাক্ট এক এক করে হস্তান্তর করা হচ্ছে
    yield* products;
    currentPage++;
  }
}

// জেনারেটরটি ব্যবহার করা
(async () => {
  const productsIterator = productFetcher();

  console.log("Showing first 3 products:");
  console.log((await productsIterator.next()).value);
  console.log((await productsIterator.next()).value);
  console.log((await productsIterator.next()).value);

  // ব্যবহারকারী 'Load More' বাটনে ক্লিক করলে আরও কিছু প্রোডাক্ট দেখানো যেতে পারে
  console.log("\nUser clicked 'Load More', showing next 3 products:");
  console.log((await productsIterator.next()).value);
  console.log((await productsIterator.next()).value);
  console.log((await productsIterator.next()).value);
})();