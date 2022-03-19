let car = {
    color: "black",
    power(n){
        return `engine power is ${n}`;
    }
};

car.color = "green";
console.log(car.color);
console.log(car.power(15));