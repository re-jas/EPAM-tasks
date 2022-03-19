// 1
try {
    console.log(a);
    let a = 3;
} catch(e) {
    if (e.name == "ReferenceError") {
        console.log("let must be declared");
    }
}

console.log("=========================");

// 2
try {
    let a = 1/0;
    console.log(a);
} catch(e) {
    if (e.name == "Infinity") {
        console.log("cannot be divided by zero");
    }
}
