// at()
const str1 = "Hello, World!";
console.log(str1.at(7));

// charAt()
console.log(str1.charAt(7));

// charCodeAt()
console.log(str1.charCodeAt(7));

// codePointAt()
console.log(str1.codePointAt(7));

// concat()
const str2 = " Are you OK?";
console.log(str1.concat(str2));

// constructor
const str3 = new String("Hello");
console.log(str3.constructor);

// endsWith()
console.log(str1.endsWith("!"));

// fromCharCode()
console.log(String.fromCharCode(87));

// includes()
console.log(str1.includes("World"));

// indexOf()
console.log(str1.indexOf("World"));

// lastIndexOf()
console.log(str1.lastIndexOf("o"));

// length
console.log(str1.length);

// localeCompare()
console.log("apple".localeCompare("banana"));
console.log("banana".localeCompare("apple"));
console.log("apple".localeCompare("apple"));

// match()
console.log(str1.match(/o/));

// padEnd()
console.log("5".padEnd(3, "0"));

// padStart()
console.log("5".padStart(3, "0"));

// prototype
console.log(String.prototype);

// repeat()
console.log("abc".repeat(3));

// replace()
console.log(str1.replace("World", "Universe"));

// replaceAll()
console.log("ab ab ab".replaceAll("ab", "xy"));
// search()
console.log(str1.search("World"));

// slice()
console.log(str1.slice(0, 5));

// split()
console.log(str1.split(", "));

// startsWith()
console.log(str1.startsWith("Hello"));

// substr()
console.log(str1.substr(7, 5));

// substring()
console.log(str1.substring(0, 5));

// toLocaleLowerCase()
console.log(str1.toLocaleLowerCase());

// toLocaleUpperCase()
console.log(str1.toLocaleUpperCase());

// toLowerCase()
console.log(str1.toLowerCase());

// toString()
const num = 123;
console.log(num.toString());

// toUpperCase()
console.log(str1.toUpperCase());

// trim()
const str4 = "   Trim   ";
console.log(str4.trim());

// trimEnd()
console.log(str4.trimEnd());

// trimStart()
console.log(str4.trimStart());

// valueOf()
console.log(str1.valueOf());
