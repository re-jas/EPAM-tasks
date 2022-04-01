// Create 2 objects: animal and cat, add move property to animal object,
// cat object must inherit move property from object animal

function Animal() {}
Animal.prototype = {
  constructor: Animal,
  move: 15,
};

function Cat() {}
Cat.prototype = Object.create(Animal.prototype);

let sphynx = new Cat();
console.log(sphynx.move);
