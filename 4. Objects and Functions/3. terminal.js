// Your name is saved in the payment terminal,
// write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)

function terminal(name) {
  return name != undefined ? `Hello, ${name}!` : "There is no such name!";
}

console.log(terminal("Jasur"));
console.log(terminal());
