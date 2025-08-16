const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  let formData = {};

  [...this].forEach((el) => {
    if (el.type !== "submit") {
      if (!validator(el)) {
        isValid = false;
        alert(`${el.name} is required!`);
      } else {
        formData[el.name] = el.value;
      }
    }
  });
  if (isValid) {
    console.log(formData);
    this.reset();
  }
});

function validator(el) {
  if (!el || el.value.trim() === "") {
    return false;
  }
  return true;
}
