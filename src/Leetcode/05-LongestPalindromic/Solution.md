# Solución

## Enfoque Bruto (O(n³))
Se verifica cada substring posible y se comprueba si es palíndromo. Esto resulta en una complejidad cúbica, poco eficiente para cadenas largas.

## Enfoque Mejorado (Expansión desde el centro, O(n²))
La función `longestPalindromeBetter` utiliza el método de expansión desde el centro:
- Para cada posición del string, se expande hacia ambos lados considerando centros de longitud impar y par.
- Si los caracteres a izquierda y derecha son iguales, se sigue expandiendo.
- Se actualiza el substring más largo encontrado en cada expansión.
- Complejidad temporal: O(n²), espacial: O(1).

Este método es mucho más eficiente y adecuado para los límites del problema.

### Ejemplo de uso
```typescript
longestPalindromeBetter("babad") // "bab" o "aba"
longestPalindromeBetter("cbbd")  // "bb"
```
