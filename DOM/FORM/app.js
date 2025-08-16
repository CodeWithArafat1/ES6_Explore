const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  let formData = {};
  [...this].forEach((data) => {
    if (data.type !== "submit") {
      if (!validator(data)) {
        isValid = false;
        alert(`${data.name} requred!`);
      } else {
        formData[data.name] = data.value;
      }
    }
  });

  if (isValid) {
    console.log(formData);
    this.reset();
  }
});

function validator(data) {
  if (!data || data.value.trim() === "") {
    return false;
  }
  return true;
}
