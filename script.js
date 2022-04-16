const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*
NOTES:
1. seearch for forEach
2. seearch for arrow function
3. seearch for addEventListener
4. seearch for classList
*/
