// querySelector and addEventListener
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const element = document.querySelector(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});

// onClick, onChange, onSubmit

const button = document.querySelector("button");
const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");
const form = document.getElementById("form");
const logged = document.getElementById("logged");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

selectElement.addEventListener("change", (event) => {
  result.textContent = `You like ${event.target.value}`;
});

function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}
form.addEventListener("submit", logSubmit);

// Promises, async/await, fetch API
async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  return data.results[0];
}
fetchRandomUser().then((user) => console.log(user));
const user = await fetchRandomUser();
console.log(user);
