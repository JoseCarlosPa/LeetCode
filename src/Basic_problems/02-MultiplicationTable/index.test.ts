import { describe, test, expect } from 'vitest';
import { multiplyNumber, multiplyNumberRecursive } from './index.ts';

describe('02-MultiplicationTable', () => {
    test('multiplyNumber returns 10 lines for n=5 and content matches', () => {
        const res = multiplyNumber(5);
        expect(res).toHaveLength(10);
        expect(res[0]).toBe('5 * 1 = 5');
        expect(res[4]).toBe('5 * 5 = 25');
        expect(res[9]).toBe('5 * 10 = 50');
    });

    test('multiplyNumberRecursive returns same result as iterative for n=5', () => {
        const iter = multiplyNumber(5);
        const rec = multiplyNumberRecursive(5);
        expect(rec).toEqual(iter);
    });

    test('check small n=2', () => {
        const expected = [
            '2 * 1 = 2', '2 * 2 = 4', '2 * 3 = 6', '2 * 4 = 8', '2 * 5 = 10',
            '2 * 6 = 12', '2 * 7 = 14', '2 * 8 = 16', '2 * 9 = 18', '2 * 10 = 20'
        ];
        expect(multiplyNumber(2)).toEqual(expected);
        expect(multiplyNumberRecursive(2)).toEqual(expected);
    });

    test('edge cases: n=0 and negative n', () => {
        expect(multiplyNumber(0)[0]).toBe('0 * 1 = 0');
        expect(multiplyNumberRecursive(-3)[2]).toBe('-3 * 3 = -9');
    });
});
