// https://leetcode.cn/problems/symmetric-tree/
// 101. 对称二叉树

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isEqual = (left, right) => {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null || left.val !== right.val) {
      return false;
    }
    return isEqual(left.left, right.right) && isEqual(left.right, right.left);
  }
  return isEqual(root.left, root.right);
};

console.log(isSymmetric([1,2,2,3,4,4,3]));