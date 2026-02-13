# Explicación y Solución

## Explicación del Problema

El problema consiste en verificar si una cadena formada únicamente por los caracteres '(', ')', '{', '}', '[' y ']' es válida según las siguientes reglas:
- Cada paréntesis abierto debe cerrarse con el mismo tipo de paréntesis.
- Los paréntesis deben cerrarse en el orden correcto.
- Cada paréntesis de cierre debe tener un paréntesis de apertura correspondiente.

Por ejemplo, la cadena "()[]{}" es válida porque todos los paréntesis están correctamente emparejados y en orden. En cambio, "([)]" no es válida porque el orden de cierre no es correcto.

## Estrategia de Solución

La forma más eficiente de resolver este problema es utilizando una estructura de pila (stack):
1. Recorremos cada carácter de la cadena.
2. Si el carácter es un paréntesis de apertura ('(', '[', '{'), lo apilamos.
3. Si es un paréntesis de cierre, verificamos si la pila no está vacía y si el elemento en la cima de la pila es el paréntesis de apertura correspondiente. Si es así, desapilamos; si no, la cadena no es válida.
4. Al final, si la pila está vacía, la cadena es válida; de lo contrario, no lo es.

Esta solución tiene una complejidad temporal de O(n), donde n es la longitud de la cadena.

## Ejemplo de Ejecución

Para la cadena "([)]":
- '(' se apila → pila: ['(']
- '[' se apila → pila: ['(', '[']
- ')' no corresponde a '[' → inválido

Para la cadena "([])":
- '(' se apila → pila: ['(']
- '[' se apila → pila: ['(', '[']
- ']' corresponde a '[' → desapilamos → pila: ['(']
- ')' corresponde a '(' → desapilamos → pila: []
- Pila vacía → válido

