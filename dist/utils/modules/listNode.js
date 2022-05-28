"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListNode = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
const createListNode = (arr, annularIndex) => {
    let head;
    let current;
    let annular;
    arr.forEach((item, index) => {
        const obj = {
            val: item,
            next: index === arr.length - 1 ? annular : null
        };
        if (index === annularIndex) {
            annular = obj;
        }
        if (index === 0) {
            head = obj;
            current = head;
        }
        else {
            current.next = obj;
            current = current.next;
        }
    });
    return head;
};
exports.createListNode = createListNode;