/**
 *  Given a number n, we need to return its multiplication table as an array of strings.
 *
 * Examples :
 *
 * Input:  5
 * Output (array):
 * [
 *  '5 * 1 = 5',
 *  '5 * 2 = 10',
 *  '5 * 3 = 15',
 *  '5 * 4 = 20',
 *  '5 * 5 = 25',
 *  '5 * 6 = 30',
 *  '5 * 7 = 35',
 *  '5 * 8 = 40',
 *  '5 * 9 = 45',
 *  '5 * 10 = 50'
 * ]
 */

// Iterative
export function multiplyNumber(n: number): string[] {
    const lines: string[] = [];
    for (let i = 1; i <= 10; i++) {
        lines.push(`${n} * ${i} = ${n * i}`);
    }
    return lines;
}

// Recursive
export function multiplyNumberRecursive(n: number, i: number = 1): string[] {
    if (i > 10) return [];
    return [`${n} * ${i} = ${n * i}`, ...multiplyNumberRecursive(n, i + 1)];
}

console.log(multiplyNumber(5))
console.log(multiplyNumberRecursive(5))
