// Web API Intro
console.log("JS Web APIs provide access to browser features.");

// Web Forms API
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = e.target.username.value;
  document.getElementById("output").textContent = `Hello, ${username}!`;
});

// Web History API
function goBack() {
  history.back();
}

// Web Storage API
function saveToStorage() {
  localStorage.setItem("demoData", "Stored via Web Storage API");
  alert("Data saved to localStorage.");
}

function loadFromStorage() {
  const data = localStorage.getItem("demoData");
  document.getElementById("output").textContent = data || "No data found.";
}

// Web Geolocation API
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      document.getElementById(
        "output"
      ).textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    });
  } else {
    alert("Geolocation is not supported.");
  }
}

// Web Fetch API
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "output"
      ).textContent = `Fetched Title: ${data.title}`;
    });
}

// Web Worker API
if (window.Worker) {
  const worker = new Worker(
    URL.createObjectURL(
      new Blob(
        [
          `
            onmessage = function(e) {
             const result = e.data * 2;
                postMessage(result);
            }
          `,
        ],
        { type: "application/javascript" }
      )
    )
  );

  worker.postMessage(10);

  worker.onmessage = function (e) {
    console.log("Web Worker Result:", e.data);
  };
}
