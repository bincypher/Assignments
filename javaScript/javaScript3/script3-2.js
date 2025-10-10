function multiplier(factor){
    return function(num){
        return num * factor;
    }
}
let double = multiplier(2);//inner function with factor set as 2
let triple = multiplier(3);//inner function with factor set as 2

console.log(double(5)); //12
console.log(triple(5)); //15