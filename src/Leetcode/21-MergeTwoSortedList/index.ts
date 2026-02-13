class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value?: number, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(firstList: ListNode | null, secondList: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0); // Lista vacia
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


const listNode1: ListNode =
    {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 4,
                next: null
            }
        }
    }

const listNode2: ListNode =
    {
        value: 1,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 2,
                    next: null
                }
            }
        }
    }
 console.log('Lista combinada:', mergeTwoLists(listNode1, listNode2))
