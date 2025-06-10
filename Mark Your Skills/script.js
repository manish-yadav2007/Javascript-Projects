let skillList = [
    { skillName: "HTML", uniqueNo: 1 },
    { skillName: "CSS", uniqueNo: 2 },
    { skillName: "JavaScript", uniqueNo: 3 }
];

let skillsContainerEl = document.getElementById("skillsContainer");

function changeStatus(checkboxId, labelId) {
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);

    if (checkboxEl.checked) {
        labelEl.classList.add("change-style");
    } else {
        labelEl.classList.remove("change-style");
    }
}

function createAndAppendItem(skill) {
    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;

    let ulEl = document.createElement("ul");
    skillsContainerEl.appendChild(ulEl);

    let liEl = document.createElement("li");
    liEl.classList.add("todo-item-container");
    ulEl.appendChild(liEl);

    let checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.id = checkboxId;
    liEl.appendChild(checkboxEl);

    let labelEl = document.createElement("label");
    labelEl.id = labelId;
    labelEl.textContent = skill.skillName;
    labelEl.setAttribute("for", checkboxId);
    liEl.appendChild(labelEl);

    checkboxEl.addEventListener("change", () => {
        changeStatus(checkboxId, labelId);

    })
}

for (let skill of skillList) {
    createAndAppendItem(skill);
}
