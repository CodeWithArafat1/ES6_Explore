// const li = document.querySelectorAll("li");
// let lis = [...li];
// let lis = Array.prototype.slice.apply(li)
// let lis = Array.from(li);

// let el = document.getElementById("el");
// let mydiv = document.getElementById("mydiv");
// let firstChild = el.firstElementChild;

// let attr = document.createAttribute('title')
// attr.value = 'I am create attr'

// firstChild.setAttributeNode(attr)

// setTimeout(() => {
//   firstChild.textContent = "Successed";
//   firstChild.style.background = "green";
//   firstChild.style.color = "white";
//   firstChild.style.padding = "10px";
// }, 5000);

// setTimeout(() => {
//   el.lastElementChild.remove();
// }, 3000);

// setTimeout(() => {
//   let copy = el.cloneNode(true);
//   mydiv.appendChild(copy);
// }, 2000);

// let el = document.getElementById("el");

// let styleObj = {
//   color: "white",
//   padding: "20px",
//   border: "1px solid red",
//   background: "tomato",
//   fontSize: "30px",
//   gap: "20px",
// };

// [...el.children].forEach((li) => Object.assign(li.style, styleObj)); //? best way

// let arr = Array.from(el.children);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);

//   arr[i] = Object.assign(arr[i].style, styleObj);
// }
let el = document.getElementById("el");
const add = document.getElementById("add");
let n = 0;

add.addEventListener("click", function (e) {
  const item = el.lastElementChild.cloneNode(true);
  n++;
  item.innerHTML = `I am new created ${n}`;

  el.appendChild(item);
});

// el.addEventListener("click", function (e) {
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

el.addEventListener("click", function (e) {
  // console.log(this.contains(e.target))

  if (this.contains(e.target)) {
    e.target.remove();
  }
});

// const mydiv = document.getElementById("mydiv");
// const point = document.getElementById("point");

// mydiv.addEventListener("click", function (e) {
//   point.style.width = "20px";
//   point.style.height = "20px";

//   setTimeout(() => {
//     point.style.width = "10px";
//     point.style.height = "10px";
//   }, 100);
// });

// const input = document.getElementById("name");

// input.addEventListener("blur", function () {
//   console.log("ফোকাস চলে গেছে!");
// });

let point = document.createElement("span");

let styles = {
  width: "10px",
  height: "10px",
  background: "red",
  borderRadius: "50%",
  position: "absolute",
  pointerEvents: "none",
  pointer: "none",
};

Object.assign(point.style, styles);
document.body.appendChild(point);

window.addEventListener("mousemove", function (e) {
  const x = e.pageX - point.offsetWidth / 2;
  const y = e.pageY - point.offsetWidth / 2;
  point.style.left = x + "px";
  point.style.top = y + "px";
});
