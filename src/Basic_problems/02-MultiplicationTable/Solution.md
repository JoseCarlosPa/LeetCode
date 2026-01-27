# Solución: Tabla de multiplicar

Objetivo: dada una entrada numérica `n`, devolver la tabla de multiplicar del 1 al 10 como un array de strings con el formato `"n * i = resultado"`.

En `index.ts` hay dos implementaciones:

1. `multiplyNumber(n: number): string[]` — versión iterativa que recorre i de 1 a 10 y construye las líneas.
2. `multiplyNumberRecursive(n: number, i: number = 1): string[]` — versión recursiva que concatena la línea actual con el resto generado recursivamente.

Explicación:

- Versión iterativa: inicializa un array vacío, itera i desde 1 hasta 10 (inclusive) y en cada paso añade la cadena `${n} * ${i} = ${n * i}` al array. Finalmente devuelve el array completo.

- Versión recursiva: caso base cuando `i > 10` devuelve `[]`. En cada llamada crea la línea para el `i` actual y concatena (usando spread) el resultado de la llamada recursiva con `i+1`.

Complejidad:

- Tiempo: O(1) en sentido práctico porque siempre hacemos 10 operaciones fijas; si lo consideráramos en función de k (número de filas), sería O(k).
- Espacio: O(1) adicional aparte del array de salida; la versión recursiva usa O(k) stack frames (hasta 10) por la recursión.

Casos borde y consideraciones:

- n = 0: la función devuelve líneas como `"0 * i = 0"` correctamente.
- n negativo: funciona igual, p. ej. `-2 * 3 = -6`.
- n no entero: se multiplicará según la semántica de JavaScript (ej.: `2.5 * 2 = 5`), si quieres restringir a enteros hay que validar la entrada.

Recomendación: usar la versión iterativa para simplicidad y evitar consumo de stack; la recursiva es útil como ejercicio didáctico.
