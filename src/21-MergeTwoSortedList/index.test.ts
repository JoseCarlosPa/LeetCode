import { describe, it, expect } from 'vitest';

class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value?: number, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(firstList: ListNode | null, secondList: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    let pointerFirst = firstList;
    let pointerSecond = secondList;

    while (pointerFirst !== null && pointerSecond !== null) {
        if (pointerFirst.value <= pointerSecond.value) {
            currentNode.next = pointerFirst;
            pointerFirst = pointerFirst.next;
        } else {
            currentNode.next = pointerSecond;
            pointerSecond = pointerSecond.next;
        }
        currentNode = currentNode.next;
    }
    if (pointerFirst !== null) {
        currentNode.next = pointerFirst;
    } else if (pointerSecond !== null) {
        currentNode.next = pointerSecond;
    }
    return dummyHead.next;
}

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

function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}

describe('mergeTwoLists', () => {
    it('fusiona dos listas ordenadas de igual tamaño', () => {
        const l1 = arrayToList([1,2,4]);
        const l2 = arrayToList([1,3,4]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1,1,2,3,4,4]);
    });
    it('fusiona cuando una lista está vacía', () => {
        const l1 = arrayToList([]);
        const l2 = arrayToList([0]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([0]);
    });
    it('fusiona listas de diferente tamaño', () => {
        const l1 = arrayToList([2,5,7]);
        const l2 = arrayToList([1,3,4,8,9]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1,2,3,4,5,7,8,9]);
    });
    it('fusiona dos listas vacías', () => {
        const l1 = arrayToList([]);
        const l2 = arrayToList([]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([]);
    });
    it('fusiona listas con elementos repetidos', () => {
        const l1 = arrayToList([1,1,2]);
        const l2 = arrayToList([1,1,2]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1,1,1,1,2,2]);
    });
});

