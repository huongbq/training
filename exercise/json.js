// JSON Intro & Syntax
const jsonString = `
 {
   "name": "Huong",
   "age": 24,
   "isStudent": false,
   "skills": ["JavaScript", "HTML", "CSS"],
   "address": { "city": "Hanoi", "country": "Vietnam" }
 }`;

// JSON Parse
const obj = JSON.parse(jsonString);

// JSON Objects & Arrays
const skillList = obj.skills.map((skill) => `<li>${skill}</li>`).join("");

// JSON Stringify
const newJson = JSON.stringify(obj, null, 2);

// JSON Data Types
document.getElementById("output").innerHTML = `
   <p><strong>Name:</strong> ${obj.name}</p>
   <p><strong>Age:</strong> ${obj.age}</p>
   <p><strong>Skills:</strong></p>
   <ul>${skillList}</ul>
   <pre>${newJson}</pre>
 `;

// JSON vs XML
const xml = `
 <person>
   <name>Huong</name>
   <age>24</age>
 </person>`;

console.log("XML", xml);
console.log("JSON", jsonString);

// JSON Server
const fakeJsonServer = () => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ message: "server!" }),
  });
};

fakeJsonServer()
  .then((res) => res.json())
  .then((data) => {
    console.log("Server", data);
  });

// JSON PHP

const phpData = "kkk";
const phpObj = JSON.parse(phpData);
console.log("PHP:", phpObj);

// 10. JSONP

function handleJsonp(data) {
  console.log("JSONP", data);
}

setTimeout(() => {
  handleJsonp({ user: "hi", role: "admin" });
}, 1000);
