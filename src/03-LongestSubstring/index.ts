/**
 * Encuentra la longitud de la subcadena más larga sin caracteres repetidos
 * usando la técnica de sliding window (ventana deslizante)
 *
 * @param s - La cadena de entrada
 * @returns La longitud de la subcadena más larga sin caracteres duplicados
 *
 * Complejidad de Tiempo: O(n) donde n es la longitud de la cadena
 * Complejidad de Espacio: O(min(m, n)) donde m es el tamaño del conjunto de caracteres
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  // Map para almacenar el último índice donde apareció cada carácter
  const charIndexMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0; // inicio de la ventana

  // Expandimos la ventana con el puntero derecho
  for (let right = 0; right < s.length; right++) {
    const currentChar = s.charAt(right);

    // Si el carácter ya existe en nuestra ventana actual
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= left) {
      // Movemos el inicio de la ventana después del duplicado
      left = charIndexMap.get(currentChar)! + 1;
    }

    // Actualizamos el índice del carácter actual
    charIndexMap.set(currentChar, right);

    // Calculamos y actualizamos la longitud máxima
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

