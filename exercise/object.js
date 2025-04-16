// Object Definition
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Object Method
  this.sayHello = function () {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, ${this.age} years old.`
    );
  };
}

// Object Prototype
Person.prototype.greet = function () {
  console.log(`${this.firstName}!`);
};

// Object Get/Set
Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
});

const user = new Person("Huong", "Bui", 24);

// Object Properties
console.log("Name:", user.firstName);
console.log("Full Name:", user.fullName);

user.fullName = "hihi haha";
console.log("New Name:", user.fullName);

user.sayHello();
user.greet();

// Object Protection
Object.seal(user);
user.age = 10000;
user.country = "VN";
delete user.firstName;

console.log(user);
