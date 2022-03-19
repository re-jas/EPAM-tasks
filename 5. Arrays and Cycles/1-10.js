console.log("1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console")
let movies = ["LOTR", "Peacemaker", "The Boys", "Interstellar", "Inglourious Basterds"];
movies.map(elm => console.log(elm));
// =============
console.log("\n2. Given an array of car manufacturers, convert the array to a string and back to an array");
let cars = ["Porsche", "Kia", "Tesla"];
console.log(cars);

cars = cars.join(" ");
console.log(cars);

cars = cars.split(" ");
console.log(cars);
// ==============
console.log("\n3. Given an array of the names of your friends, add the words hello to each element of the array");
let names = ["Din", "Sam", "Castiel", "Crowley"];
let namesHello = names.map(name => "Hello " + name);
console.log(namesHello);
// ==============
console.log("\n4. Convert numeric array to Boolean");
let nums = [50, 0, 1, 20, -30];
console.log(nums);
console.log(nums.map(num => Boolean(num)));
// ==============
console.log("\n5. Sort the array [1,6,7,8,3,4,5,6] in descending order");
console.log([1, 6, 7, 8, 3, 4, 5, 6].sort((a, b) => b - a));
// ==============
console.log("\n6. Filter array [1,6,7,8,3,4,5,6] by value > 3");
console.log([1, 6, 7, 8, 3, 4, 5, 6].filter(n => n > 3));
// ===============
console.log("\n7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number");
let arr = [1, 6, 7, 8, 3, 4, 5, 6];
let findNum = ((arr, num) => `${num} in inedx ${arr.indexOf(num)}`);
console.log(findNum(arr, 8));
// ===============
console.log("\n8. Implement a loop that will print the number 'a' until it is less than 10");
for (let a = 0; a < 10; a++) console.log(a);
// ===============
console.log("\n9. Implement a loop that prints prime numbers to the console");
let x = 20
for (let i = 2; i < x; i++) {
    let numIsPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            numIsPrime = false;
            break;
        }
    }
    if (numIsPrime) console.log(i);
};

// ===============
console.log("\n10. Implement a loop that prints odd numbers to the console");
for (let i = 2; i <= 20; i += 2) console.log(i);