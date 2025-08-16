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
      let index = checkedSkills.indexOf(e.target.value);
      checkedSkills.splice(index, 1);
      outputSkills(showSkill, checkedSkills);
    }
  });
});

function outputSkills(parent, arr) {
  let result = "";
  arr.forEach((skill, index) => {
    result += `(${index + 1}) ${skill},  `;
  });
  parent.innerHTML = result;
}
