//? XML http request

// const xhr = new XMLHttpRequest();
// xhr.open("get", "https://jsonplaceholder.typicode.com/users");

// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let users = JSON.parse(xhr.response);
//       console.log(users);
//     } else {
//       console.log(xhr.status);
//     }
//   }
// };

// xhr.send();

// function getRequest(url, callBack) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("get", url);

//   xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let response = JSON.parse(xhr.response);
//         callBack(null, response);
//       } else {
//         callBack(xhr.response, null);
//       }
//     }
//   };

//   xhr.send();
// }

// getRequest("https://jsonplaceholder.typicode.com/users", (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// getRequest("https://jsonplaceholder.typicode.com/posts", (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     response.map((r) => console.log(r.title));
//   }
// });

// let arr = [1, 2, 3, 4, 5];

// let sqr = arr.map((v) => v * v);
// console.log(sqr);

// function asyncMap(arr, cb) {
//   return arr.map((v) => {
//     // setTimeout(cb.bind(null, v), 0);
//     setTimeout(() => cb(v), 0);
//   });
// }
// let qb = asyncMap(arr, (v) => {
//   console.log(v);
// });
// console.log(qb);

// let xhr = new XMLHttpRequest();

// xhr.open("get", "https://jsonplaceholder.typicode.com/posts");

// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let response = JSON.parse(xhr.response);
//       response.map((v) => console.log(v.title));
//     } else {
//       console.log(xhr.response);
//     }
//   }
// };

// xhr.send();

function getRequest(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        cb(null, response);
      } else {
        cb(xhr.status, null);
      }
    }
  };
  xhr.send();
}

getRequest("https://jsonplaceholder.typicode.com/posts", (error, response) => {
  if (error) {
    console.log(error);
  } else {
    response.map((v) => {
      console.log(v.title);
    });
  }
});
