// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "done");
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "done 2");
// });

// p1.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

// p2.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

// function getIphone(isPassed) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isPassed) {
//         resolve("I have Got an I phone");
//       } else {
//         reject(new Error("Your have Failed"));
//       }
//     }, 2000);
//   });
// }

// console.log(getIphone(false));

// getIphone(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

// function getData(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("get", url);

//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           let response = JSON.parse(xhr.response);
//           resolve(response);
//         } else {
//           reject(new Error("Error"));
//         }
//       }
//     };
//     xhr.send();
//   });
// }

// const baseUrl = "https://jsonplaceholder.typicode.com/users";

// getData(`${baseUrl}`)
//   .then((data) => {
//     let first10 = data.slice(0, 2);
//     first10.forEach((v) => {
//       let { name, email } = v;
//       console.log(name, email);
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// let p1 = Promise.resolve("one");
// let p2 = Promise.resolve("two");
// let p3 = Promise.resolve("three");

// let promiseArr = [p1, p2, p3];

// Promise.all(promiseArr).then((arr) => {
//     console.log(arr)
// });

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "one");
});

let p2 = new Promise((resolve) => {
  setTimeout(resolve, 7000, "tow");
});

let p3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "three");
});

let promiseArr = [p1, p2, p3];

// Promise.all(promiseArr).then((v)=>{
//     console.log(v)
// })

Promise.race(promiseArr)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
