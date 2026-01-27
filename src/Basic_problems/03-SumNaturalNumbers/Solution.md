# Solución: Suma de los primeros n números naturales

Objetivo: dado un entero positivo `n`, calcular la suma de los primeros `n` números naturales: 1 + 2 + ... + n.

Implementaciones en `index.ts`:

1. `sumOfNatural(n: number): number` — versión iterativa que recorre i de 1 a n acumulando la suma.
2. `sumOfNaturalRecursion(n: number): number` — versión recursiva que suma `n + sumOfNaturalRecursion(n-1)` con caso base `n == 1`.

Fórmula cerrada (no incluida como función, pero usada en tests y útil para comparación):

Suma = n * (n + 1) / 2

Explicación:

- Iterativa: inicializa `sum = 0` y suma `i` en un bucle de 1 a n. Es directa y eficiente.
- Recursiva: caso base `n == 1` devuelve 1; para n > 1 devuelve `n + sumOfNaturalRecursion(n - 1)`. Es sencilla pero usa stack frames proporcionales a n.
- La fórmula cerrada se deriva de la observación de pares (1+n, 2+(n-1), ...) y permite calcular la suma en O(1).

Complejidad:

- `sumOfNatural`: Tiempo O(n), Espacio O(1).
- `sumOfNaturalRecursion`: Tiempo O(n), Espacio O(n) por la pila de llamadas.
- Fórmula cerrada: Tiempo O(1), Espacio O(1).

Casos bordes y validaciones:

- n = 0: si consideramos la definición de "primeros n números naturales" con n >= 1, n = 0 podría devolver 0; las implementaciones actuales no manejan explícitamente 0 en la recursiva (podría provocar comportamiento incorrecto). Es recomendable validar que n >= 1 antes de llamar a la recursiva.
- n negativo: entrada inválida — debería validarse y lanzar error o devolver 0 según convenga.
- n grande: la versión recursiva puede desbordar la pila para n muy grande; preferir la iterativa o la fórmula cerrada para inputs grandes.

Recomendación: para producción usar la fórmula cerrada o la versión iterativa; mantener la recursiva solo con fines educativos y para n pequeños.
