/**
 * LeetCode Problem 2: Add Two Numbers
 * * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * * Example 1:
 * * Input: l1 = [2,4,3], l2 = [5,6,4]
 * * Output: [7,0,8]
 * * Explanation: 342 + 465 = 807.
 * * Example 2:
 * * Input: l1 = [0], l2 = [0]
 * * Output: [0]
 * * Example 3:
 * * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * * Output: [8,9,9,9,0,0,0,1]
 **/

type Node = ListNode | null;


//Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function addTwoNumbers(l1: Node, l2: Node): Node{
    const result: ListNode | null = new ListNode(0);
    let currentNode = result;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return result.next;
}

// Run code:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const sumList = addTwoNumbers(l1, l2);
let current = sumList;
const values: number[] = [];
while(current !== null){
    values.push(current.val);
    current = current.next;
}
console.log(values); // [7, 0, 8]
