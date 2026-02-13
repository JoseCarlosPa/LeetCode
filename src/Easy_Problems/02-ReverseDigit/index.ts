/**
 * Given an Integer n, find the reverse of its digits.

Examples:  

Input: n = 122
Output: 221
Explanation: By reversing the digits of number, number will change into 221.

Input: n = 200
Output: 2
Explanation: By reversing the digits of number, number will change into 2.

Input: n = 12345 
Output: 54321
Explanation: By reversing the digits of number, number will change into 54321.
 */


// javascript functions
function reverseDiti(n:number){
    return parseInt(n.toString().split('').reverse().join(""));
}

function reverseDigitManual(n:number){
    const number = n.toString();
    let num: string[] = []

    for(let i = 0;i < number.length;i++){
        num.push(number[number.length - 1 -i] ?? '')
    }
    return parseInt(num.join(""));
}

console.log(reverseDiti(122)) // 221
console.log(reverseDigitManual(122)) // 221

console.log(reverseDiti(200)) // 221
console.log(reverseDigitManual(200)) // 221

console.log(reverseDiti(12345)) // 221
console.log(reverseDigitManual(12345)) // 221