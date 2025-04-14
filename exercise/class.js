// JS Classes / Class Intro
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  // Static method
  static info() {
    console.log("Animals are living creatures.");
  }
}

// Class Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");

myDog.speak();

console.log("Dog's name:", myDog.name);
console.log("Dog's breed:", myDog.breed);

Animal.info();
Dog.info();
