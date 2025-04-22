//function
function myFunction() {
  console.log("1. Hello World!");
}
myFunction();

function myFunction1() {
  document.getElementById("demo").innerHTML = "Hello";
}

// Array
var fruits = ["Apple", "Banana", "Cherry"];
var numbers = [1, 2, 45, 7, 8, 9, 0];
console.log(fruits[0]);
fruits.push("Kiwi");
console.log(fruits);
fruits.includes(1, 2);
console.log(fruits.reverse());
numbers.map((x) => {
  if (x > 5) {
    console.log(x);
  }
});

// if else, switch
const z = (y = 1);
if (z > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}

switch (fruits) {
  case "Banana":
    console.log("Hello");
    break;
  case "Apple":
    console.log("Welcome");
    break;
  default:
    console.log("Neither");
}

// for, for in, for of, while loops
let i,
  x = "";
for (i = 0; i <= 5; i++) {
  x += i;
  console.log(i);
}

for (let x in fruits) {
  console.log(fruits[x]);
}

for (x of fruits) {
  console.log(x);
}

let a = 15,
  b = "";
do {
  b += "The number is " + a;
} while (a < 10);

// break and continue

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at", i);
    break;
  }
  console.log("Number:", i);
}

for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Destructuring Arrays
const name = ["Alice", "Bob", "Charlie", "Dave"];
const [name1, name2, name3, name4] = name;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

// Destructuring Objects
const person = {
  firstName: "Alice",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

const { firstName, age, address } = person;

console.log(firstName);
console.log(age);
console.log(address);

// error handling
try {
  let x = "Hello";
} catch (err) {
  console.log("Something went wrong");
} finally {
  console.log("Everything went fine");
}
