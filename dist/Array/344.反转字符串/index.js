"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
function reverseString(s) {
    case1(s);
    return s;
}
exports.reverseString = reverseString;
;
// case1: 双指针；时间复杂度：O(n)，空间复杂度：O(1)
// 执行用时：80 ms, 在所有 TypeScript 提交中击败了95.61 %的用户
// 内存消耗：49.1 MB, 在所有 TypeScript 提交中击败了57.19 %的用户
const case1 = (s) => {
    let left = 0, right = s.length - 1;
    while (left <= right) {
        const temp = s[right];
        s[right--] = s[left];
        s[left++] = temp;
    }
};
