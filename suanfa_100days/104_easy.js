// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// 104. 二叉树的最大深度

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
 * @return {number}
 */
var maxDepth = function(root) {
  const getDepth = (node) => {
    if (node === null) {
      return 0;
    }
    return Math.max(getDepth(node.left)  + 1, getDepth(node.right) + 1);
  }
  return getDepth(root);
};