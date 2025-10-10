let message = "Hello from outside";

function showMessage() {
  console.log(message); // Accessing outer scope variable
}
showMessage(); // Outputs: Hello from outside

//what is lexical scope?
//what is scope chain?
//what is closure?

//how will you use closures?

//data privay
function seceretCounter(){
    let count = 0;
    return {
        increment: function(){
            count++;
            console.log(count);
        },
        decrement: function(){
            count--;
            console.log(count);
        },
        reset:  function(){
            count=0;
            console.log(count);
        }
    }
}
let counter = seceretCounter();
console.log(counter);
counter.increment()
counter.increment()
counter.increment()
counter.reset()