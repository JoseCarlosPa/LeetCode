# Merge Sorted Array

## Descripción
Dado dos arreglos de enteros ordenados en orden no decreciente, nums1 y nums2, y dos enteros m y n que representan la cantidad de elementos en nums1 y nums2 respectivamente, fusiona nums2 en nums1 como un solo arreglo ordenado. El arreglo final debe almacenarse en nums1.

## Ejemplo

### Ejemplo 1
- Entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
- Salida: [1,2,2,3,5,6]

### Ejemplo 2
- Entrada: nums1 = [1], m = 1, nums2 = [], n = 0
- Salida: [1]

### Ejemplo 3
- Entrada: nums1 = [0], m = 0, nums2 = [1], n = 1
- Salida: [1]

## Restricciones
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- nums1.length == m + n
- nums2.length == n
- -10^9 <= nums1[i], nums2[i] <= 10^9

## Notas
La función debe modificar nums1 en su lugar, no retornar un nuevo arreglo.
