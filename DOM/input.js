const input = document.getElementById("input");
const list = document.getElementById("list-ul");


input.addEventListener("keypress", function (e) {
  const value = input.value.trim();
  const li = document.createElement("li");
  li.className = "w-full border p-2 rounded";
  li.textContent = value;

  if (e.key === "Enter") {
    list.appendChild(li);
    input.value = "";
  }
});

const skills = document.getElementsByName("skills");
const showSkill = document.getElementById("showSkill");
let checkedSkills = [];

[...skills].forEach((skill) => {
  skill.addEventListener("change", function (e) {
    if (e.target.checked) {
      if (!checkedSkills.includes(e.target.value)) {
        checkedSkills.push(e.target.value);
        outputSkills(showSkill, checkedSkills);
      }
    } else {
      let ind = checkedSkills.indexOf(e.target.value);
      checkedSkills.splice(ind, 1);
      outputSkills(showSkill, checkedSkills);
    }
  });
});

function outputSkills(parent, skills) {
  let result = "";
  skills.forEach((skill, ind) => {
    result += `(${ind + 1}), ${skill} `;
  });

  parent.innerHTML = result;
}


