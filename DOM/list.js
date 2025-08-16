const lists = document.getElementById("list-ul");

lists.addEventListener("dblclick", function (e) {
  if (this.contains(e.target)) {
    let text = e.target.innerHTML;
    e.target.innerHTML = "";
    let inputBox = createInputBox(text);
    e.target.appendChild(inputBox);

    inputBox.addEventListener("keypress", function (event) {
      let inputValue = inputBox.value.trim();
      if (event.key == "Enter") {
        e.target.innerHTML = inputValue;
      }
    });
  }
});

function createInputBox(value) {
  let inp = document.createElement("input");
  inp.type = "text";
  inp.className = "w-full border-2 border-red-800 py-1 px-2 outline-0";
  inp.value = value;
  return inp;
}
