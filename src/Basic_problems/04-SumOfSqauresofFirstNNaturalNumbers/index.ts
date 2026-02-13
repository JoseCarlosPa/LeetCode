/**
 * Given a positive integer n, we have to find the sum of squares of first n natural numbers.
 * Examples :
 *
 * Input : n = 2
 * Output: 5
 * Explanation: 1^2+2^2 = 5
 *
 * Input : n = 8
 * Output: 204
 * Explanation :  1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 + 7^2 + 8^2 = 204
 */


// normal
function sumOfSquares(n:number){
    let sum: number = 0;
    for(let i = 0; i <= n;i ++){
        sum += (i*i)
    }
    return sum;
}

console.log('Using normal',sumOfSquares(8));

