# Solución al problema "Es palíndromo"

Este problema consiste en determinar si un número entero es un palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda.

## Enfoques:

### Solución óptima (O(n) tiempo, O(1) espacio)
Convierte el número a cadena y compara los caracteres desde ambos extremos hacia el centro. Si todos coinciden, el número es palíndromo.

### Solución directa con manipulación de cadenas (O(n) tiempo, O(n) espacio)
Convierte el número a cadena, invierte la cadena y compara con la original. Si son iguales, es palíndromo.

## Consideraciones:
- Números negativos nunca son palíndromos.
- Números que terminan en cero (excepto 0) tampoco lo son.

## Ejemplos:
- 121 → true
- -121 → false
- 10 → false

