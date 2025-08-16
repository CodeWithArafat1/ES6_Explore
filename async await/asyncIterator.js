//? asyncIterator

let asyncItarable = {
  [Symbol.asyncIterator]: function () {
    let i = 0;
    return {
      next() {
        if (i <= 5) {
          return Promise.resolve({
            value: i++,
            done: false,
          });
        } else {
          return Promise.resolve({
            value: undefined,
            done: true,
          });
        }
      },
    };
  },
};

(async function () {
  for await (let v of asyncItarable) {
    console.log(v);
  }
})();

//? asyncGenarator

async function* myAsyncGenaratro() {
  let i = 0;
  while (true) {
    if (i > 5) return;

    yield await Promise.resolve(i++);
  }
}

(async function () {
  for await (let v of myAsyncGenaratro()) {
    console.log(v);
  }
})();
