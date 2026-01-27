import { describe, test, expect } from 'vitest';
import { CheckIfEven, CheckIfEventComplex } from './index.ts';

describe('Basic_problems - CheckIfEven', () => {
    test('0 should be even', () => {
        expect(CheckIfEven(0)).toBe(true);
    });

    test('positive even number', () => {
        expect(CheckIfEven(44)).toBe(true);
    });

    test('positive odd number', () => {
        expect(CheckIfEven(15)).toBe(false);
    });

    test('negative even number', () => {
        expect(CheckIfEven(-8)).toBe(true);
    });

    test('negative odd number', () => {
        expect(CheckIfEven(-7)).toBe(false);
    });

    test('non-integer value returns false (behavior: module with float)', () => {
        expect(CheckIfEven(2.5)).toBe(false);
    });
});

describe('Basic_problems - CheckIfEventComplex', () => {
    test('0 should be even', () => {
        expect(CheckIfEventComplex(0)).toBe(true);
    });

    test('positive even number', () => {
        expect(CheckIfEventComplex(44)).toBe(true);
    });

    test('positive odd number', () => {
        expect(CheckIfEventComplex(15)).toBe(false);
    });

    test('negative even number', () => {
        expect(CheckIfEventComplex(-8)).toBe(true);
    });

    test('negative odd number', () => {
        expect(CheckIfEventComplex(-7)).toBe(false);
    });

    test('non-integer value behavior: coerced to int and tested', () => {
        // In JS/TS, bitwise operators coerce to 32-bit integers, so 2.5 -> 2 -> even
        expect(CheckIfEventComplex(2.5)).toBe(true);
    });
});
