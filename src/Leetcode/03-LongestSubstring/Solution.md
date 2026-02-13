# Solución: Subcadena Más Larga Sin Caracteres Repetidos

## Enfoque: Sliding Window (Ventana Deslizante)

### Descripción del Algoritmo

Este problema se resuelve eficientemente usando la técnica de **ventana deslizante** con un HashMap para rastrear los caracteres vistos.

#### Idea Principal:
- Mantenemos una ventana que contiene caracteres únicos
- Expandimos la ventana agregando caracteres por la derecha
- Si encontramos un duplicado, contraemos la ventana desde la izquierda
- Rastreamos la longitud máxima de la ventana en cada paso

### Pasos del Algoritmo:

1. **Inicialización:**
   - Usamos un `Map` para almacenar cada carácter y su índice más reciente
   - `left`: puntero que marca el inicio de la ventana actual
   - `right`: puntero que recorre la cadena (bucle for)
   - `maxLength`: almacena la longitud máxima encontrada

2. **Iteración:**
   - Para cada carácter en la posición `right`:
     - Si el carácter ya está en el Map Y su índice es >= `left`:
       - Movemos `left` a la posición siguiente del carácter duplicado
     - Actualizamos el índice del carácter actual en el Map
     - Calculamos la longitud actual de la ventana: `right - left + 1`
     - Actualizamos `maxLength` si la ventana actual es mayor

3. **Resultado:**
   - Retornamos `maxLength`

### Ejemplo Visual:

Para `s = "abcabcbb"`:

```
Paso 1: a         -> ventana: "a",   maxLength = 1
Paso 2: ab        -> ventana: "ab",  maxLength = 2
Paso 3: abc       -> ventana: "abc", maxLength = 3
Paso 4: abca      -> duplicado 'a' encontrado
                     left salta a índice 1
                     ventana: "bca",  maxLength = 3
Paso 5: abcab     -> duplicado 'b' encontrado
                     left salta a índice 2
                     ventana: "cab",  maxLength = 3
Paso 6: abcabc    -> duplicado 'c' encontrado
                     left salta a índice 3
                     ventana: "abc",  maxLength = 3
Paso 7: abcabcb   -> duplicado 'b' encontrado
                     left salta a índice 5
                     ventana: "cb",   maxLength = 3
Paso 8: abcabcbb  -> duplicado 'b' encontrado
                     left salta a índice 7
                     ventana: "b",    maxLength = 3

Resultado: 3
```

### Complejidad:

- **Tiempo: O(n)**
  - Recorremos la cadena una sola vez con el puntero `right`
  - El puntero `left` solo se mueve hacia adelante
  - Las operaciones del Map son O(1)

- **Espacio: O(min(m, n))**
  - m = tamaño del conjunto de caracteres (por ejemplo, 128 para ASCII)
  - n = longitud de la cadena
  - En el peor caso, almacenamos todos los caracteres únicos

### Casos Edge:

1. **Cadena vacía:** Retorna 0
2. **Todos caracteres iguales:** "aaaaa" → Retorna 1
3. **Todos caracteres únicos:** "abcde" → Retorna 5
4. **Un solo carácter:** "a" → Retorna 1
5. **Caracteres especiales y espacios:** También funciona correctamente

### Ventajas de este Enfoque:

1. ✅ **Eficiente:** Una sola pasada O(n)
2. ✅ **Simple:** Fácil de entender y mantener
3. ✅ **Robusto:** Maneja todos los casos edge
4. ✅ **Escalable:** Funciona bien con cadenas grandes

### Alternativas Consideradas:

1. **Fuerza Bruta:** O(n³) - Demasiado lento
2. **Dos punteros con Set:** O(n) pero requiere más operaciones
3. **DP:** Posible pero más complejo sin mejorar la complejidad

### Código Implementado:

```typescript
export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  
  const charIndexMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= left) {
      left = charIndexMap.get(currentChar)! + 1;
    }
    
    charIndexMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}
```

---

**Fecha de Solución:** Octubre 26, 2025  
**Dificultad:** Media  
**Técnica Principal:** Sliding Window + HashMap

