import { describe, test, expect } from 'vitest';
import { sumOfNatural, sumOfNaturalRecursion } from './index.ts';

function formula(n:number) { return n * (n + 1) / 2; }

describe('03-SumNaturalNumbers', () => {
    test('small values match formula: n=1,3,5', () => {
        [1,3,5].forEach(n => {
            expect(sumOfNatural(n)).toBe(formula(n));
            expect(sumOfNaturalRecursion(n)).toBe(formula(n));
        });
    });

    test('iterative equals formula for larger n=100', () => {
        expect(sumOfNatural(100)).toBe(formula(100));
    });

    test('recursion for moderate n (n=10) equals iterative', () => {
        expect(sumOfNaturalRecursion(10)).toBe(sumOfNatural(10));
    });

    test('edge: n = 0 returns 0 for iterative', () => {
        expect(sumOfNatural(0)).toBe(0);
    });

    test('edge: recursion throws for n <= 0', () => {
        expect(() => sumOfNaturalRecursion(0)).toThrow();
        expect(() => sumOfNaturalRecursion(-5)).toThrow();
    });
});
