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
  const reverseList = node => {
    let prev = null, curr = node;
    while(curr != null) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
  const getMiddleNode = node => {
    let slow = fast = node;
    while(fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  const mid = getMiddleNode(head);
  let reverseMid = reverseList(mid);
  while(reverseMid != null) {
    if (reverseMid.val != head.val) return false;
    reverseMid = reverseMid.next;
    head = head.next;
  }
  return true;
};
