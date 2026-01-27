# Solución: Comprobar si un número es par o impar

Objetivo: dado un número entero `n`, devolver `true` si es par y `false` si es impar.

En este proyecto hay dos implementaciones en `index.ts`:

1. `CheckIfEven(n: number): boolean` — Usa el operador módulo `%` para comprobar si `n % 2 === 0`.
2. `CheckIfEventComplex(n: number): boolean` — Usa una operación bit a bit `n & 1` y comprueba si es `0`.

Explicación:

- Método con módulo (`%`): Un número es par cuando al dividirlo entre 2 el resto es 0. Por eso `n % 2 === 0` devuelve `true` para pares y `false` para impares. Esta forma es clara y directa.

- Método con bitwise (`&`): En representación binaria, los números pares terminan en 0 y los impares en 1. Haciendo `n & 1` obtenemos el bit menos significativo (LSB). Si `n & 1` es `0`, entonces `n` es par; si es `1`, es impar. Esta operación suele ser algo más rápida porque trabaja directamente a nivel de bits.

Complejidad:

- Tiempo: O(1) en ambos métodos — realizan un número constante de operaciones.
- Espacio: O(1) — no usan memoria adicional proporcional a la entrada.

Casos borde y consideraciones:

- Cero: `0` es par, ambas funciones devuelven `true`.
- Números negativos: Ambos enfoques funcionan con negativos en JavaScript/TypeScript. Por ejemplo, `-2` es par y `-3` es impar.
- No enteros: Si se pasan valores no enteros (ej. `2.5`), las funciones evaluarán `2.5 % 2 === 0` (falso) y `(2.5 & 1)` que convierte implícitamente a entero de 32 bits — en general, conviene validar la entrada si el comportamiento para no enteros importa.

Recomendación: Usar `CheckIfEven` para claridad; usar `CheckIfEventComplex` si se busca micro-optimización o se trabaja en entornos donde las operaciones a nivel de bits son preferidas.
