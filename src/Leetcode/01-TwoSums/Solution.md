# Solución paso a paso: Two Sums (Suma de dos)

Descripción breve

Dado un arreglo de enteros `nums` y un entero `target`, retorna los índices de los dos números tal que sumen `target`. Se asume que hay exactamente una solución y que no se puede usar el mismo elemento dos veces.

¿Qué busca el problema?

El problema pide identificar *dos posiciones* dentro del arreglo cuyas cifras sumen exactamente el valor `target`. Importante:

- Se esperan los *índices* de los elementos (por ejemplo `[0, 1]`), no los valores en sí.
- No se puede usar el mismo elemento dos veces (por ejemplo, no usar `nums[0]` dos veces) a menos que aparezca duplicado en posiciones distintas.
- La respuesta puede devolverse en cualquier orden, pero normalmente se devuelve `[índice_del_complemento, índice_actual]` cuando se encuentra la pareja.
- El enunciado garantiza que existe exactamente una solución, por lo que no necesitamos manejar múltiples respuestas.

Contrato

- Entrada: `nums: number[]`, `target: number`
- Salida: `number[]` (un arreglo con dos índices `[i, j]`)
- Precondiciones: existe exactamente una pareja de índices válida

Idea principal (en una frase)

Usar una tabla hash (Map) para recordar los valores ya vistos y sus índices; para cada número `x`, comprobar si `target - x` ya está en la tabla. Si está, tenemos la solución; si no, guardar `x` con su índice y continuar.

Por qué funciona

Al iterar una sola vez por el arreglo y guardar los elementos vistos en una estructura de acceso O(1), garantizamos que cuando encontremos la pareja complementaria, podamos recuperarla inmediatamente. Esto evita un segundo bucle anidado y reduce la complejidad temporal a O(n).

Paso a paso con ejemplo

Ejemplo: `nums = [2, 7, 11, 15]`, `target = 9`

1. Inicializa un Map vacío `seen = {}`.
2. i = 0, x = 2: calcula `complement = 9 - 2 = 7`. `7` no está en `seen`. Guarda `seen[2] = 0`.
3. i = 1, x = 7: calcula `complement = 9 - 7 = 2`. `2` sí está en `seen` con índice 0. Retorna `[seen[2], 1]` => `[0, 1]`.

Pseudocódigo

1. Crear map vacío `seen`
2. Para i desde 0 hasta nums.length-1:
   - x = nums[i]
   - complement = target - x
   - si complement en seen: retornar [seen[complement], i]
   - sino: seen[x] = i

Implementación en TypeScript

```ts
// ...esta implementación corresponde al enfoque con Map y debe coincidir con la que está en `index.ts`.
export function twoSums(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const complement = target - x;
    if (seen.has(complement)) {
      // retornamos el índice del complemento (previamente guardado) y el índice actual
      return [seen.get(complement) as number, i];
    }
    // guardamos el valor actual con su índice
    seen.set(x, i);
  }
  // según la especificación del problema, siempre hay una solución
  throw new Error('No two sum solution');
}
```

Complejidad

- Tiempo: O(n), donde n es la longitud de `nums`, ya que cada elemento se procesa una vez y las operaciones de Map (has/get/set) son O(1) en promedio.
- Espacio: O(n) en el peor caso para almacenar los valores vistos en el Map.

Casos borde y notas

- Si `nums` tiene solo dos elementos, la función seguirá funcionando correctamente.
- Si hay números duplicados, el Map guarda el último índice visto del valor; la lógica sigue siendo válida porque se comprueba el complemento antes de insertar el elemento actual, evitando usar el mismo elemento dos veces.
- El enunciado típico de Two Sums asegura que existe exactamente una solución; si eso no se cumpliera, la función lanza un error.

Pruebas rápidas (ejemplos)

- `twoSums([2,7,11,15], 9) // -> [0,1]`
- `twoSums([3,2,4], 6) // -> [1,2]`
- `twoSums([3,3], 6) // -> [0,1]`

Notas finales

- Esta explicación y el código están en concordancia con un enfoque eficiente y típico para Two Sums. Si en el repositorio hay un archivo `index.ts` con otra firma o comportamiento (por ejemplo, retornar valores en lugar de índices), adapta la implementación y las pruebas para que sean consistentes.
- Si quieres, puedo también:
  - Añadir comentarios línea a línea en `index.ts`.
  - Asegurar que `index.test.ts` cubra los casos mencionados (happy path y 1-2 casos borde).
