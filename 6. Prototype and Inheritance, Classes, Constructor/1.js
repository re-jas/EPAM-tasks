function Animal() { }
Animal.prototype = {
  constructor: Animal,
  move: 15
};

function Cat() { }
Cat.prototype = Object.create(Animal.prototype);

let sphynx = new Cat();
console.log(sphynx.move);