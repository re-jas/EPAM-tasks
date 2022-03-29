// Pears and apples are accepted to the warehouse,
// write a function that returns the result of adding the number of accepted pears and apples

fruits = {
  apples: 15,
  pears: 20,
  fruitsSum() {
    return this.apples + this.pears;
  },
};

console.log(fruits.fruitsSum());
