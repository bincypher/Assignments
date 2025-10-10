//function declaration
function serveBeverage(beverage,quantity){ //function accepts parameters
    console.log("Serving " + quantity + " of " + beverage);
}
//function invocation done with the arguments
serveBeverage("Coffee", 2);
serveBeverage("Tea", 1);
serveBeverage("Juice", 3);



//function expression
// sayHello('world'); //this will cause an error because sayHello is not defined yet
let sayHello = function(name){ //function accepts parameter
    console.log("Hello " + name);
};
sayHello("Alice"); //function invocation done with argument


//function callback
function processUserInput(callback){
    let name = "Bob";
    callback(name); //invoking the callback function with argument
}
processUserInput(sayHello); //passing sayHello as a callback function



//Hoisting
hoistedFunction(); //function can be called before its declaration due to hoisting
function hoistedFunction(){
    console.log("This function is hoisted!");
}

// let str = "Hello, World!";
// let vowelCount = str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
// console.log("Number of vowels in the string: " + vowelCount);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.sort((a,b)=> b-a)[0]);

let str = "A man, a plan, a canal, Panama!";
str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
let arr1 = str.split('');
let arr2 = str.split('').reverse();
for(let i=0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){
        console.log("Not a palindrome");
        break;
    }
}
console.log("is pallindrome") ;