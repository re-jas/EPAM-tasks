// 1
let testStr = 'ahb acb aeb aeeb adcb axeb';
let testRegex = /a.b/g;
console.log(testStr.match(testRegex));


// 2
let testStr2 = '2 + 3 223 2223';
let testRegex2 = /^2\s.\s3/g;
console.log(testStr2.match(testRegex2));


// 3
let date = new Date();
console.log(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`);
