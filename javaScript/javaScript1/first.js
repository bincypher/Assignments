console.log("Hello World");
console.log("Welcome to JavaScript");

// REPL:Read–Eval–Print Loop.

let c = 2/0;
console.log(c); // Infinity

let d = -2/0;
console.log(d); // -Infinity

let e = "abc"/2;
console.log(e); // NaN

let musk = 500_000_000_000;
let ambani = 400_000_000_000;
musk = musk + 100_000_000_000;
console.log(musk + ambani);

// console.log(y); // ReferenceError: y is not defined
var x;
console.log(x); // undefined

let arr = [1,2,3,4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]