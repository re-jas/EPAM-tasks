function fruitsSum(objects) {
    sum = 0;
    for(i in objects) {
        sum += objects[i];
    }
    return sum;
}

fruits = {
    apples: 15,
    pears: 20
};
console.log(fruitsSum(fruits));
