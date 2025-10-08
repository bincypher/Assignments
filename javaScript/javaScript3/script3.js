//lexical scope

// Case 1: var inside a block
if (true) {
  var x = 10;
  console.log("Inside block:", x); //  Works fine, prints 10
}

console.log("Outside block:", x); //  Still accessible! Prints 10


function demo() {
  var y = 20;
  console.log("Inside function:", y); //  Works fine
}

demo();
// console.log("Outside function:", y); // reference error

// Let and const scoping
console.log("Example 2: let and const are block-scoped");

if (true) {
  let a = 100;
  const b = 200;
  console.log("Inside block:", a, b); //  Works fine
}

// console.log("Outside block:",  a,  b); //  Both inaccessible here, reference error