/**
 * Given two positive numbers x and y, check if y is a power of x or not.
Examples : 

Input:  x = 10, y = 1
Output: True
x^0 = 1

Input:  x = 10, y = 1000
Output: True
x^3 = 1

Input:  x = 10, y = 1001
Output: False
 */


function checkPower(x:number,y:number){
    console.log(Math.log(y)/Math.log(x))
    return Number.isInteger(Math.log(y)/Math.log(x));

}


console.log(checkPower(10,1)); // true
console.log(checkPower(10,1001)); // false
console.log(checkPower(6,36)); // true
console.log(checkPower(2,128)); // true
console.log(checkPower(2,30)); // false