Dado un arreglo de enteros `nums` y un entero `target`, devuelve los índices de los dos números tales que su suma sea igual a `target`.

Puedes asumir que cada entrada tiene exactamente una solución y que no se puede usar el mismo elemento dos veces.

Puedes devolver la respuesta en cualquier orden.



Ejemplo 1:

Entrada: nums = [2,7,11,15], target = 9
Salida: [0,1]
Explicación: Como nums[0] + nums[1] == 9, devolvemos [0, 1].
Ejemplo 2:

Entrada: nums = [3,2,4], target = 6
Salida: [1,2]
Ejemplo 3:

Entrada: nums = [3,3], target = 6
Salida: [0,1]


Restricciones:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Solo existe una respuesta válida.


Pregunta adicional: ¿Puedes idear un algoritmo con complejidad temporal menor que O(n^2)?
