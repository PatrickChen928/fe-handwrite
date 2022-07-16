// https://leetcode.cn/problems/convert-bst-to-greater-tree/
// 538. 把二叉搜索树转换为累加树

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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let pre = 0;
  const stack = [];
  let curr = root;
  while(curr || stack.length) {
    if (curr != null) {
      stack.push(curr);
      curr = curr.right;
    } else {
      curr = stack.pop();
      curr.val += pre;
      pre = curr.val;
      curr = curr.left;
    }
  }
  return root;
};