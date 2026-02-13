/**
 * Given two integers n and m (m != 0). Find the number closest to n and divisible by m.
 *  If there is more than one such number, then output the one having maximum absolute value.

Examples: 

Input: n = 13, m = 4
Output: 12
Explanation: 12 is the closest to 13, divisible by 4.

Input: n = -15, m = 6
Output: -18
Explanation: Both -12 and -18 are closest to -15, but -18 has the maximum absolute value.
 */

function closesToNAndDivisbleByM(n:number,m:number){
    if (m === 0) throw new Error("m no puede ser 0");
    // Calcula el múltiplo inferior y superior
    const lower = Math.floor(n / m) * m;
    const upper = Math.ceil(n / m) * m;
    // Calcula la distancia a n
    const distLower = Math.abs(n - lower);
    const distUpper = Math.abs(n - upper);
    if (distLower < distUpper) {
        return lower;
    } else if (distUpper < distLower) {
        return upper;
    } else {
        // Si hay empate, devuelve el de mayor valor absoluto
        return Math.abs(lower) > Math.abs(upper) ? lower : upper;
    }
}

console.log(closesToNAndDivisbleByM(13,4)); // 12
console.log(closesToNAndDivisbleByM(-15,6)); // -18
