// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// 19. 删除链表的倒数第 N 个结点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curr = head, prev = head;
  while(curr) {
    curr = curr.next;
    if (n === -1) {
      prev = prev.next;
    } else {
      n--;
    }
  }
  if (n >= 0) {
    return head.next;
  }
  prev = prev.next;
  return head;
};

console.log(removeNthFromEnd([1,2], 2));
