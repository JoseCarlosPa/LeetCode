# Solución Merge Two Sorted Lists

## Explicación de la solución

La función `mergeTwoLists` toma como entrada dos listas enlazadas ordenadas y las fusiona en una sola lista ordenada. Utiliza un nodo "dummy" (cabeza ficticia) para simplificar la lógica de unión. Se usan dos punteros (`pointerFirst` y `pointerSecond`) para recorrer ambas listas. En cada iteración, se compara el valor de los nodos actuales y se enlaza el menor al resultado. El puntero correspondiente avanza al siguiente nodo. Cuando una de las listas se termina, se enlaza el resto de la otra lista al resultado.

- **Complejidad temporal:** O(n + m), donde n y m son las longitudes de las listas.
- **Complejidad espacial:** O(1), ya que se reutilizan los nodos existentes y no se crean nuevos nodos (excepto el dummy).

### Ejemplo paso a paso

Listas de entrada:
- Lista 1: 1 → 2 → 4
- Lista 2: 1 → 3 → 4

Iteraciones:
1. Compara 1 y 1, elige cualquiera (elige el de la primera lista), avanza puntero de la primera lista.
2. Compara 2 y 1, elige 1 (segunda lista), avanza puntero de la segunda lista.
3. Compara 2 y 3, elige 2, avanza puntero de la primera lista.
4. Compara 4 y 3, elige 3, avanza puntero de la segunda lista.
5. Compara 4 y 4, elige cualquiera, avanza puntero correspondiente.
6. Una lista termina, enlaza el resto de la otra.

Resultado: 1 → 1 → 2 → 3 → 4 → 4

