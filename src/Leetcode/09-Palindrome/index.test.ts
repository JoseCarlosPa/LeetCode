import { describe, it, expect } from 'vitest';
import { isPalindrome, isPalindromeComplex } from './index.ts';

describe('isPalindrome', () => {
    it('debería retornar true para 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });
    it('debería retornar false para -121', () => {
        expect(isPalindrome(-121)).toBe(false);
    });
    it('debería retornar false para 10', () => {
        expect(isPalindrome(10)).toBe(false);
    });
    it('debería retornar true para 0', () => {
        expect(isPalindrome(0)).toBe(true);
    });
    it('debería retornar true para 12321', () => {
        expect(isPalindrome(12321)).toBe(true);
    });
});

describe('isPalindromeComplex', () => {
    it('debería retornar true para 121', () => {
        expect(isPalindromeComplex(121)).toBe(true);
    });
    it('debería retornar false para -121', () => {
        expect(isPalindromeComplex(-121)).toBe(false);
    });
    it('debería retornar false para 10', () => {
        expect(isPalindromeComplex(10)).toBe(false);
    });
    it('debería retornar true para 0', () => {
        expect(isPalindromeComplex(0)).toBe(true);
    });
    it('debería retornar true para 12321', () => {
        expect(isPalindromeComplex(12321)).toBe(true);
    });
});
