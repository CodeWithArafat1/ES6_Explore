// let n = 10;

// if (n > 5) {
//   throw console.error("N is geter then 5");
// }

// function changeToInt(v) {
//   let result = Number.parseInt(v);

//   if (!result) {
//     return "Pleace Provide a value which is able to convert in integer";
//   }

//   return result;
// }

// let n = changeToInt("100.96");
// console.log(n);

// function makeWrods(text) {
//   try {
//     let str = text.trim()
//     let words = str.split(' ')
//     return words
//   } catch (error) {
//     // console.log(error.message)
//     console.log('Place provide a valid text')
//   }

//   //   let str = text.trim();
//   //   let words = str.split(" ");

//   //   return words;
// }

// let text = 4;
// console.log(makeWrods(text));

class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "customError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("I am line 1");
  //   throw new Error("I am Your Error!");
  throw new CustomError("I am Error!");
  console.log("I am line 2");
  console.log("I am line 3");
} catch (e) {
    console.dir(e)
    console.log(e.message)
  console.log("Stack Trace:", e.stack);
} finally {
  console.log("I am fainaly block");
}
