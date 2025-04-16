// Function Definition
function greet(name) {
  console.log("Welcome, " + name);
}

// Function Parameters & Invocation
greet("huong");

// Function Call
function showDetails(city, country) {
  console.log(`${this.name} is from ${city}, ${country}`);
}

const person = { name: "Vit" };
showDetails.call(person, "Hanoi", "Vietnam");

// Function Apply
showDetails.apply(person, ["Hatay", "Vietnam"]);

// Function Bind
const boundFn = showDetails.bind(person, "Thachthan", "Vietnam");
boundFn();

// Function Closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter = createCounter();
counter();
counter();

function doMath(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(doMath(5, 3, add));
console.log(doMath(5, 3, multiply));
