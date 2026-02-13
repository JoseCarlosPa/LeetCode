## Solución

La solución óptima utiliza dos punteros para recorrer ambos arreglos desde el final, insertando los valores más grandes al final de nums1. Esto evita el uso de memoria adicional y cumple con el requerimiento de modificar nums1 en su lugar.

### Algoritmo
1. Inicializa tres punteros: i = m - 1 (último elemento válido de nums1), j = n - 1 (último elemento de nums2), k = m + n - 1 (última posición de nums1).
2. Compara nums1[i] y nums2[j]. Coloca el mayor en nums1[k] y mueve los punteros.
3. Si quedan elementos en nums2, cópialos a nums1.

### Complejidad
- Tiempo: O(m + n)
- Espacio: O(1)

### Ejemplo

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

Resultado: [1,2,2,3,5,6]

### Código

```typescript
function merge(nums1: number[], m: number, nums2: number[], n: number) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
```

