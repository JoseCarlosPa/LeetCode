import { describe, expect, test } from 'vitest';
import { addTwoNumbers, ListNode } from './index.ts';

// Helper function para convertir una lista enlazada a un array
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Helper function para crear una lista enlazada desde un array
function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

describe('addTwoNumbers', () => {
    test('Ejemplo 1: [2,4,3] + [5,6,4] = [7,0,8]', () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    test('Ejemplo 2: [0] + [0] = [0]', () => {
        const l1 = arrayToList([0]);
        const l2 = arrayToList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });

    test('Ejemplo 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]', () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = arrayToList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    test('Listas de diferente longitud: [9,9] + [1]', () => {
        const l1 = arrayToList([9, 9]);
        const l2 = arrayToList([1]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 1]);
    });

    test('Una lista más larga: [1,8] + [0]', () => {
        const l1 = arrayToList([1, 8]);
        const l2 = arrayToList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([1, 8]);
    });

    test('Suma simple sin acarreo: [1,2] + [3,4]', () => {
        const l1 = arrayToList([1, 2]);
        const l2 = arrayToList([3, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([4, 6]);
    });

    test('Suma con acarreo en todos los dígitos: [5] + [5]', () => {
        const l1 = arrayToList([5]);
        const l2 = arrayToList([5]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 1]);
    });

    test('Acarreo al final: [9,9,9] + [1]', () => {
        const l1 = arrayToList([9, 9, 9]);
        const l2 = arrayToList([1]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 0, 1]);
    });

    test('Un solo dígito en cada lista: [2] + [3]', () => {
        const l1 = arrayToList([2]);
        const l2 = arrayToList([3]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([5]);
    });

    test('Números grandes: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] + [5,6,4]', () => {
        const l1 = arrayToList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
        const l2 = arrayToList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    });
});

