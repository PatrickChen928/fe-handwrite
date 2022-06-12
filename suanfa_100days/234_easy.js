// https://leetcode.cn/problems/palindrome-linked-list/
// 234. 回文链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) return true;
    let prev = null, slow = fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        const temp = slow;
        slow = slow.next;
        temp.next = prev;
        prev = temp;
    }
    if (fast) {
        slow = slow.next;
    }
    while (slow) {
        if (slow.val != prev.val) {
        return false;
        }
        slow = slow.next;
        prev = prev.next;
    }
    return true;
};
