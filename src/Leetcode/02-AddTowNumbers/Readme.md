Se te dan dos listas enlazadas no vacías que representan dos números enteros no negativos. 
Los dígitos se almacenan en orden inverso, y cada uno de sus nodos contiene un solo dígito. 
Suma los dos números y devuelve la suma como una lista enlazada.

Puedes asumir que los dos números no contienen ningún cero inicial, excepto el número 0 en sí mismo.

Ejemplo 1:

![Add Two Numbers](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)


Entrada: l1 = [2,4,3], l2 = [5,6,4]
Salida: [7,0,8]
Explicación: 342 + 465 = 807.
Ejemplo 2:

Entrada: l1 = [0], l2 = [0]
Salida: [0]
Ejemplo 3:

Entrada: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Salida: [8,9,9,9,0,0,0,1]


Restricciones:

El número de nodos en cada lista enlazada está en el rango [1, 100].
0 <= Node.val <= 9
Se garantiza que la lista representa un número que no tiene ceros iniciales.
