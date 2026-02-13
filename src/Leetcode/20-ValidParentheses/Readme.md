# Problema: 20. Valid Parentheses

Dado un string `s` que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determina si el string de entrada es válido.

Un string de entrada es válido si:
- Los paréntesis abiertos se cierran con el mismo tipo de paréntesis.
- Los paréntesis abiertos se cierran en el orden correcto.
- Cada paréntesis de cierre tiene un paréntesis de apertura correspondiente del mismo tipo.

**Ejemplos:**

- Input: "()"        → Output: true
- Input: "()[]{}"    → Output: true
- Input: "(]"        → Output: false
- Input: "([)]"      → Output: false
- Input: "([])"      → Output: true

