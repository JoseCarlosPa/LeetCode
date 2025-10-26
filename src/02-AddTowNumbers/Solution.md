# Solución: Sumar Dos Números

## Enfoque

El problema requiere sumar dos números representados como listas enlazadas en orden inverso. La estrategia es similar a sumar dos números dígito por dígito, manejando el acarreo (carry) cuando la suma excede 9.

## Algoritmo

1. **Inicialización**: Creamos una lista enlazada ficticia (dummy node) para facilitar la construcción del resultado y una variable `carry` para manejar el acarreo.

2. **Iteración**: Recorremos ambas listas simultáneamente mientras exista al menos un nodo en cualquiera de las listas o haya un acarreo pendiente.

3. **Suma de dígitos**: En cada iteración:
   - Obtenemos el valor del nodo actual de l1 (o 0 si es null)
   - Obtenemos el valor del nodo actual de l2 (o 0 si es null)
   - Sumamos ambos valores más el acarreo
   - El nuevo acarreo es `sum / 10` (división entera)
   - El dígito a guardar es `sum % 10` (módulo)

4. **Construcción del resultado**: Creamos un nuevo nodo con el dígito calculado y lo añadimos a la lista resultado.

5. **Avanzar**: Movemos los punteros de ambas listas al siguiente nodo si existen.

6. **Retorno**: Retornamos `result.next` (el nodo después del dummy node).

## Complejidad

- **Tiempo**: O(max(n, m)) donde n y m son las longitudes de las listas l1 y l2. Recorremos ambas listas una vez.
- **Espacio**: O(max(n, m)) para almacenar la lista resultado. En el peor caso, la longitud de la lista resultado es max(n, m) + 1 (si hay un acarreo final).

## Código

```typescript
function addTwoNumbers(l1: Node, l2: Node): Node {
    const result: ListNode | null = new ListNode(0);
    let currentNode = result;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return result.next;
}
```

## Casos Edge

- **Listas de diferente longitud**: Manejado usando el operador ternario para usar 0 cuando una lista es null.
- **Acarreo final**: La condición `carry > 0` en el while asegura que agregamos un nodo adicional si hay acarreo después de procesar ambas listas.
- **Lista con un solo cero**: [0] + [0] = [0] funciona correctamente.

## Ejemplo Paso a Paso

Para l1 = [2,4,3] (342) y l2 = [5,6,4] (465):

1. Iteración 1: 2 + 5 + 0 = 7, carry = 0, resultado = [7]
2. Iteración 2: 4 + 6 + 0 = 10, carry = 1, resultado = [7,0]
3. Iteración 3: 3 + 4 + 1 = 8, carry = 0, resultado = [7,0,8]
4. No hay más nodos ni carry, terminamos.

Resultado final: [7,0,8] que representa 807.

