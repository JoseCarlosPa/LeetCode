/**
 * Given a positive integer n, find the sum of the first n natural numbers.
 *
 * Examples :
 *
 * Input: n = 3
 * Output: 6
 * Explanation: 1 + 2 + 3 = 6
 *
 * Input: n = 5
 * Output: 15
 * Explanation:  1 + 2 + 3 + 4 + 5 = 15
 */

export function sumOfNatural(n:number): number {
    if (n <= 0) return 0; // definir comportamiento para n <= 0
    let sum = 0;
    for(let i = 1; i <= n;i++) {
        sum = sum + i;
    }
    return sum;
}

export function sumOfNaturalRecursion(n:number): number{
    if (n <= 0) throw new Error('n debe ser un entero positivo');
    if(n == 1){
        return 1
    }
    return n + sumOfNaturalRecursion(n - 1);
}
