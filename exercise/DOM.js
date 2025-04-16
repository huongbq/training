// DOM Intro + DOM Document
console.log("Document Title:", document.title);

// DOM Methods
const title = document.getElementById("title");
const box = document.querySelector("#box");

// DOM HTML
title.innerHTML = "Welcome to the DOM Demo";

// DOM Forms
const form = document.getElementById("form");
const input = document.getElementById("nameInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Hello, " + input.value);
  input.value = "";
});

// DOM CSS
const colorBtn = document.getElementById("colorBtn");
colorBtn.style.padding = "10px";
colorBtn.style.marginBottom = "10px";

// DOM Animations
colorBtn.addEventListener("click", () => {
  box.style.backgroundColor =
    box.style.backgroundColor === "coral" ? "lightgreen" : "coral";
  box.style.transform = "scale(1.1)";
  setTimeout(() => (box.style.transform = "scale(1)"), 200);
});

// DOM Events + DOM Event Listener
title.addEventListener("mouseover", () => {
  title.style.color = "blue";
});
title.addEventListener("mouseout", () => {
  title.style.color = "black";
});

// DOM Navigation
const list = document.getElementById("list");
console.log("Parent of list:", list.parentElement);
console.log("First child:", list.firstElementChild.innerText);
console.log("Last child:", list.lastElementChild.innerText);

// DOM Nodes
const textNode = document.createTextNode("Item 3");
const newItem = document.createElement("li");
newItem.appendChild(textNode);
list.appendChild(newItem);

// DOM Collections
const allInputs = document.forms[0].elements;
console.log("Form elements (HTMLCollection):", allInputs);

// DOM NodeLists
const allLis = document.querySelectorAll("li");
allLis.forEach((li, index) => {
  li.textContent += ` (item ${index + 1})`;
});
