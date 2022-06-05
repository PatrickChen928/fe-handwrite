// https://leetcode.cn/problems/sort-list/
// 148. 排序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // 1. 转换数组再排序再生成链表
  // if (head === null) return null;
  // let curr = head;
  // const arr = [];
  // while(curr) {
  //   arr.push(curr.val);
  //   curr = curr.next;
  // }
  // arr.sort((a, b) => a - b);
  // const ans = new ListNode(arr[0]);
  // curr = ans;
  // for (let i = 1; i < arr.length; i++) {
  //   curr.next = new ListNode(arr[i]);
  //   curr = curr.next;
  // }
  // return ans;
  const sort = (head, tail) => {
    if (head === null) return head;
    if (head.next === tail) {
      head.next = null;
      return head;
    }
    let fast = head, slow = head;
    while (fast != tail) {
      fast = fast.next;
      slow = slow.next;
      if (fast != tail) {
        fast = fast.next;
      }
    }
    return merge(sort(head, slow), sort(slow, tail));
  }
  const merge = (head1, head2) => {
    let first = new ListNode(0), temp = first, temp1 = head1, temp2 = head2;
    while(temp1 != null && temp2 != null) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp.next;
    }
    if (temp1 != null) {
      temp.next = temp1;
    }
    if (temp2 != null) {
      temp.next = temp2;
    }
    return first.next;
  }
  return sort(head, null);
};