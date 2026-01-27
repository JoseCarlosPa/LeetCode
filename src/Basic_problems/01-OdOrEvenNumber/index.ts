/**
 * Given a number n, check whether it is even or odd. Return true for even and false for odd.
 *
 * Examples:
 *
 * Input: n = 15
 * Output: false
 * Explanation: 15 % 2 = 1, so 15 is odd .
 *
 * Input: n = 44
 * Output: true
 * Explanation: 44 % 2 = 0, so 44 is even.
 */

export function CheckIfEven(n: number): boolean {
    return n % 2 === 0; // using a function by divide and get the remain
}

export function CheckIfEventComplex(n: number): boolean {
    return (n & 1) === 0; // using bitwise, all od numbers ends in 1 and pair in 0
}
// Normal
console.log('CheckIfEven should be false: ', CheckIfEven(0));
console.log('CheckIfEven should be false: ', CheckIfEven(15));
console.log('CheckIfEven should be true:', CheckIfEven(44));

// With bitwise

console.log('CheckIfEven should be false: ', CheckIfEventComplex(0));
console.log('CheckIfEven should be false: ', CheckIfEventComplex(15));
console.log('CheckIfEven should be true:', CheckIfEventComplex(44));
