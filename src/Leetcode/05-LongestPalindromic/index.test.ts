import { describe, it, expect } from 'vitest';
import { longestPalindrome, longestPalindromeBetter } from './index.ts';

describe('longestPalindrome', () => {
    it('debería encontrar el palíndromo más largo (caso babad)', () => {
        const s = 'babad';
        expect(['bab', 'aba']).toContain(longestPalindrome(s));
    });
    it('debería encontrar el palíndromo más largo (caso cbbd)', () => {
        const s = 'cbbd';
        expect(longestPalindrome(s)).toBe('bb');
    });
    it('debería funcionar con un solo carácter', () => {
        expect(longestPalindrome('a')).toBe('a');
    });
    it('debería funcionar con todos los caracteres iguales', () => {
        expect(longestPalindrome('aaaa')).toBe('aaaa');
    });
    it('debería funcionar con string sin palíndromos mayores', () => {
        expect(longestPalindrome('abc')).toBe('a');
    });
});

describe('longestPalindromeBetter', () => {
    it('debería encontrar el palíndromo más largo (caso babad)', () => {
        const s = 'babad';
        expect(['bab', 'aba']).toContain(longestPalindromeBetter(s));
    });
    it('debería encontrar el palíndromo más largo (caso cbbd)', () => {
        const s = 'cbbd';
        expect(longestPalindromeBetter(s)).toBe('bb');
    });
    it('debería funcionar con un solo carácter', () => {
        expect(longestPalindromeBetter('a')).toBe('a');
    });
    it('debería funcionar con todos los caracteres iguales', () => {
        expect(longestPalindromeBetter('aaaa')).toBe('aaaa');
    });
    it('debería funcionar con string sin palíndromos mayores', () => {
        expect(longestPalindromeBetter('abc')).toBe('a');
    });
});
