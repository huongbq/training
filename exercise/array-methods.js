// JS Arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = Array(5).fill(0); // Array() + fill()
const mixed = Array.of(1, "two", { three: 3 }); // Array.of()

// at()
console.log(fruits.at(-1));

// concat()
const moreFruits = fruits.concat(["date", "elderberry"]);
console.log(moreFruits);

// constructor
console.log(fruits.constructor === Array);

// copyWithin()
let copy = [...fruits];
copy.copyWithin(1, 0);
console.log(copy);

// entries()
for (let [i, v] of fruits.entries()) {
  console.log(i, v);
}

// every()
console.log(numbers.every((n) => n === 0));

// fill()
const filled = Array(3).fill("x");

// filter()
const longFruits = moreFruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);

// find()
console.log(fruits.find((f) => f.startsWith("b")));

// findIndex()
console.log(fruits.findIndex((f) => f === "banana"));

// findLast()
console.log(fruits.findLast((f) => f.includes("e")));

// findLastIndex()
console.log(fruits.findLastIndex((f) => f.includes("e")));

// flat()
const nested = [1, [2, [3]]];
console.log(nested.flat(2));

// flatMap() - map() + flat()
console.log(numbers.flatMap((n) => [n, n + 1]));

// forEach()
fruits.forEach((f) => console.log("Fruit:", f));

// from()
console.log(Array.from("hello"));

// includes()
console.log(fruits.includes("banana"));

// indexOf()
console.log(fruits.indexOf("banana"));

// isArray()
console.log(Array.isArray(fruits));

// join()
console.log(fruits.join(" - "));

// keys()
for (let key of fruits.keys()) {
  console.log("Index:", key);
}

// lastIndexOf()
console.log(["a", "b", "a"].lastIndexOf("a"));

// length
console.log(fruits.length);

// map()
const upper = fruits.map((f) => f.toUpperCase());
console.log(upper);

// pop()
let f1 = [...fruits];
f1.pop();
console.log(f1);

// prototype
console.log(Array.prototype === [].__proto__);

// push()
f1.push("dragonfruit");
console.log(f1);

// reduce()
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// reduceRight()
const reversedConcat = ["a", "b", "c"].reduceRight((acc, val) => acc + val);
console.log(reversedConcat);

// reverse()
const reversed = [...fruits].reverse();
console.log(reversed);

// shift()
let f2 = [...fruits];
f2.shift();
console.log(f2);

// slice()
console.log(fruits.slice(1, 3));
// some()
console.log(fruits.some((f) => f === "banana"));

// sort()
console.log([...fruits].sort());
// splice()
let f3 = [...fruits];
f3.splice(1, 1, "blueberry");
console.log(f3);

// toReversed()
console.log(fruits.toReversed());
// toSorted()
console.log(fruits.toSorted());

// toSpliced()
console.log(fruits.toSpliced(1, 1, "kiwi"));

// toString()
console.log(fruits.toString());

// unshift()
let f4 = [...fruits];
f4.unshift("mango");
console.log(f4);

// values()
for (let value of fruits.values()) {
  console.log("Value:", value);
}

// valueOf()
console.log(fruits.valueOf() === fruits);

// with()
console.log(fruits.with(0, "pear"));
