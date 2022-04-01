// Given the string 'ahb acb aeb aeeb adcb axeb'.
// Write a regular expression that matches the strings
// ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let testStr = "ahb acb aeb aeeb adcb axeb";
let testRegex = /a.b/g;
console.log(testStr.match(testRegex));
