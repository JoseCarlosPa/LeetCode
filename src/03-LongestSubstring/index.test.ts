import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from './index.ts'

describe('lengthOfLongestSubstring', () => {
  it('should return 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  it('should return 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  it('should return 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  it('should return 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('should return 1 for single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1)
  })

  it('should return length for all unique characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6)
  })

  it('should handle string with spaces', () => {
    expect(lengthOfLongestSubstring('a b c a b c')).toBe(3)
  })

  it('should handle special characters', () => {
    expect(lengthOfLongestSubstring('!@#$%!@')).toBe(5)
  })

  it('should handle numbers as characters', () => {
    expect(lengthOfLongestSubstring('123456123')).toBe(6)
  })

  it('should return correct length for "dvdf"', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3) // "vdf"
  })

  it('should return correct length for "anviaj"', () => {
    expect(lengthOfLongestSubstring('anviaj')).toBe(5) // "nviaj"
  })

  it('should handle long string efficiently', () => {
    const longString = 'a'.repeat(10000) + 'bcdefg'
    expect(lengthOfLongestSubstring(longString)).toBe(7) // "abcdefg"
  })

  it('should handle alternating pattern', () => {
    expect(lengthOfLongestSubstring('abba')).toBe(2) // "ab" o "ba"
  })

  it('should handle mixed case letters', () => {
    expect(lengthOfLongestSubstring('aAbBcC')).toBe(6) // todas son diferentes
  })

  it('should handle unicode characters', () => {
    // Nota: Los emojis son caracteres multibyte (pares surrogate)
    // La implementación cuenta unidades de código UTF-16, no puntos de código Unicode
    expect(lengthOfLongestSubstring('αβγαβγ')).toBe(3) // "αβγ" - caracteres griegos
  })
})

