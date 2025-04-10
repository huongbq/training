const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn">X</button>
    `;
    list.appendChild(li);
    input.value = "";
    input.focus();
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
});
