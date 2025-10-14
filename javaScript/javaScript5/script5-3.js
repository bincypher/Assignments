// Region Map method
    const numbers = [1, 2, 3, 4, 5];
    function calculateSquares(number) {
    return number * number;
    }
    const squares = numbers.map(calculateSquares);
    console.log(squares);// [1, 4, 9, 16, 25]

    const transactions = [100, 200, 300];
    const inrToUsd= 83;
    const amountInUsd = transactions.map(function(amount){
        return amount / inrToUsd;
    });
    console.log(amountInUsd);// [1.2048192771084337, 2.4096385542168675, 3.614457831325301]
// End Region Map method


// Region Filter method
    const numbers2 = [1, 2, 3, 4, 5];
    const evenNumbers = numbers2.filter(function(num){
        if(num % 2 === 0){
            return num;
        }
    });
    console.log(evenNumbers);// [ 2, 4 ]

    const transactions2 = [100, 200, 300, 700, -200, -400, 800];
    const creditTransactions = transactions2.filter(function(amount){
        if(amount > 0){
            return amount;
        }
    });
// End Region Filter method

// Region Reduce method
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum);// 15

const numbers4 = [75,54, 85, 95, 100];
const maximum = numbers4.reduce(function(accumulator, currentValue){
    if(currentValue > accumulator){
        return currentValue;
    }
    return accumulator;
}, numbers4[0]);
console.log(maximum);// 100
// End Region Reduce method


const transactions3 = [100, 200, 300, 700, -200, -400, 800];
const inrToUsd2= 83;
const positiveValuesInUsd = transactions3
    .filter(function(amount){
        if(amount > 0){
            return amount;
        }
    })
    .map(function(amount){
        return amount / inrToUsd2;
    })
    .reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }, 0);
console.log(positiveValuesInUsd);



// let arr = [];
// let errorcheck = arr.reduce(function(acc){
//     return acc;
// });

// console.log(errorcheck);// Uncaught TypeError: Reduce of empty array with no initial value