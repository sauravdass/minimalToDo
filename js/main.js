//catching essential element
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const icon = document.querySelector(".button .icon");
const field = document.querySelector(".field");

// add button hide show
input.addEventListener("keyup", () => {
  if (input.value === "") {
    addBtn.style.display = "none";
  } else {
    addBtn.style.display = "block";
  }
});

// new task add
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task");
    input.value = "";
  } else {
    ul.innerHTML += `<li><span><i class="fa fa-trash"></i></span>${input.value}</li>`;
    input.value = "";

    deletion();
  }

  if (input.value === "") {
    addBtn.style.display = "none";
  } else {
    addBtn.style.display = "block";
  }
});

// delete task
function deletion() {
  const deleteBtn = document.querySelectorAll("li span");
  deleteBtn.forEach((element) => {
    element.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}
deletion();

//input hide show and icon rotate
icon.addEventListener("click", function () {
  field.classList.toggle("hide");
  this.classList.toggle("rotate");
});
