class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Shared method for all animals
  makeSound() {
    const message = `The ${this.species} makes a sound`;
    console.log(message);
    displayLog(message);
  }
}

class Cat extends Animal {
  // Unique behavior for Cat
  purr() {
    console.log("purr");
    displayLog("purr");
  }
}

class Dog extends Animal {
  // Unique behavior for Dog
  bark() {
    console.log("woof");
    displayLog("woof");
  }
}

// --- UI Helper Function ---
function displayLog(msg) {
  const logBox = document.getElementById('log-box');
  if(logBox) {
    const div = document.createElement('div');
    div.className = 'log';
    div.textContent = `> ${msg}`;
    logBox.appendChild(div);
  }
}

// --- Execution Example ---
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();       // woof

// For Cypress Testing
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;