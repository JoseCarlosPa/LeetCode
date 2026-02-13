/**
 * Given a number n, find the sum of its digits.

Examples : 

Input: n = 687
Output: 21
Explanation: The sum of its digits are: 6 + 8 + 7 = 21

Input: n = 12
Output: 3
Explanation: The sum of its digits are: 1 + 2 = 3
 */

// with Convertion
function sumOfNumber(n:number){
    let sum = 0;
    const numberArray:string[] = n.toString().split('')
    for(let i = 0; i < numberArray.length;i++){
        sum += Number(numberArray[i]);
    }

    return sum;
}

// with digit extraction
function sumOfDigits(n:number) {
    let sum = 0;
    while (n !== 0) {

        // Extract the last digit
        let last = n % 10;

        // Add last digit to sum
        sum += last;

        // Remove the last digit
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfNumber(687)) // 21
console.log(sumOfNumber(12)) // 3