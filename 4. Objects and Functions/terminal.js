function terminal(name){
    return (name != undefined) ? `Hello, ${name}!` :
    'There is no such name!';
}

console.log(terminal("Jasur"));
console.log(terminal());