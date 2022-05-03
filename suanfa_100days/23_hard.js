// https://leetcode-cn.com/problems/merge-k-sorted-lists/
// 23. 合并K个升序链表

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // const n = lists.length;
  // if(n === 0) {
  //     return null
  // }
  // let head = lists[0];
  // for (let i = 1; i < n; i++) {
  //     if (lists[i] === null) {
  //         continue;
  //     }
  //     if (head === null) {
  //         head = lists[i];
  //         continue;
  //     }
  //     let node = lists[i];
  //     let curr = head;
  //     let last = new ListNode(null, curr);
  //     while(node && curr) {
  //         if (node.val <= curr.val) {
  //             last.next = new ListNode(node.val, curr);
  //             if (last.val === null) {
  //                 head = last.next;
  //             }
  //             node = node.next;
  //             last = last.next;
  //         } else {
  //             last = curr;
  //             curr = curr.next;
  //         }
  //     }
  //     if (node) {
  //         last.next = node;
  //     }
  // }
  // return head;
  if (!lists.length) return null;
  return merge(lists, 0, lists.length - 1);
};

function merge(lists, start, end) {
  if (start >= end) {
    return lists[end];
  }
  const mid = (end + start) >> 1;
  const list1 = merge(lists, start, mid);
  const list2 = merge(lists, mid + 1, end);
  return mergeTwoList(list1, list2);
}

function mergeTwoList(list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val > list2.val) {
    list2.next = mergeTwoList(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoList(list2, list1.next);
    return list1;
  }
}
