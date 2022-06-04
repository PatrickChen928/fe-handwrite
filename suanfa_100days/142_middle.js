// https://leetcode.cn/problems/linked-list-cycle-ii/
// 142. 环形链表 II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // 1. 快慢指针
  // if (head === null) {
  //   return null;
  // }
  // let slow = head, fast = head;
  // while (fast !== null) {
  //     slow = slow.next;
  //     if (fast.next !== null) {
  //         fast = fast.next.next;
  //     } else {
  //         return null;
  //     }
  //     if (fast === slow) {
  //         let ptr = head;
  //         while (ptr !== slow) {
  //             ptr = ptr.next;
  //             slow = slow.next;
  //         }
  //         return ptr;
  //     }
  // }
  // return null;

  // 2. 哈希表
  const visted = new Set();
  while(head != null) {
    if (visted.has(head)) {
      return head;
    }
    visted.add(head);
    head = head.next;
  }
  return null;
};