// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
// 114. 二叉树展开为链表

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  // 1. 迭代
  // const stack = [root];
  // while(stack.length) {
  //   const node = stack.pop();
  //   if (node) {
  //     if (node.right) stack.push(node.right);
  //     if (node.left) stack.push(node.left);
  //     node.left = null;
  //     if (stack.length) node.right = stack[stack.length - 1];
  //   }
  // }

  // 2. 递归
  // if (root === null) return null;
  // flatten(root.left);
  // const right = root.right;
  // root.right = root.left;
  // root.left = null;
  // while(root.right) {
  //   root = root.right;
  // }
  // flatten(right);
  // root.right = right;

  // 3
  while(root != null) {
    if (root.left === null) {
      root = root.right;
    } else {
      let node = root.left;
      while(node.right) {
        node = node.right;
      }
      node.right = root.right;
      root.right = root.left;
      root.left = null;
      root = root.right;
    }
  }
};