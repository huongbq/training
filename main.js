// for: loops through a block of code a number of times
for (let i = 0; i < 10; i++) {
  i = i++;
}
// console.log("i=", i);

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

greet("huong");

//function declaration
function add(a, b) {
  return a + b;
}
add(1, 2);

// function arrow
const multiply = (a, b) => {
  a * b;
  console.log("sum", a * b);
};
multiply(3, 4);

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

// Destructuring Arrays
const names = ["Alice", "Bob", "Charlie", "Dave"];
const [name1, name2, name3, name4] = names;

console.log(name1);

// Destructuring Objects
const personn = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

const { namee, age, address } = personn;

console.log(namee);
console.log(age);
console.log(address);

// Destructuring Nested Objects
const personnn = {
  nameee: "Alice",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

const {
  nameee,
  agee,
  address: { city, state },
} = personnn;

console.log(nameee);
console.log(agee);
console.log(city);
console.log(state);

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Spread Operator
const numberss = [1, 2, 3, 4, 5];

console.log(...numberss);
