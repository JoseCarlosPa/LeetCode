/**
 * Given a positive integer, check if the number is prime or not.
 *  A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
 * Examples of the first few prime numbers are {2, 3, 5, ...}
Examples : 

Input:  n = 11
Output: true

Input:  n = 15
Output: false

Input:  n = 1
Output: false 
 */

function isPrime(n:number){

    if(n == 1) return false;
    for(let i = 2;i < n; i++){
        if(i != n &&  n % i == 0){
            return false ;
        }
    }
    return true;


}



console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(19)); // true
console.log(isPrime(18)); // false



