// for: loops through a block of code a number of times
for (let i = 0; i < 10; i++) {
  i = i++;
}
console.log("i=", i);

// for/in: loops through the properties of an object
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// for/of: loops through the values of an iterable object
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// while: loops through a block of code while a specified condition is true
let n = 0;

while (n < 3) {
  n++;
}
console.log("n=", n);

// do/while: loops through a block of code while a specified condition is true
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log("i--", i);

// function

function greet(name) {
  console.log(`Hello, ${name}!`);
}

//function declaration
function add(a, b) {
  return a + b;
}

// function arrow
const multiply = (a, b) => a * b;

// Objects & Arrays (key-value pairs, array methods like map, filter, reduce)
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((x) => x * 2);
const filterNumber = numbers.filter((x) => x > 3);
const reduceNumber = numbers.reduce(
  (accumulator, current) => accumulator + current
);
