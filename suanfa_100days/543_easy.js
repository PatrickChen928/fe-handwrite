// https://leetcode.cn/problems/diameter-of-binary-tree/
// 543. 二叉树的直径

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
var diameterOfBinaryTree = function(root) {
  let ans = 0;
  const dfs = (node) => {
    if (node === null) return 0;
    const right = dfs(node.right);
    const left = dfs(node.left);
    ans = Math.max(right + left + 1, ans);
    return Math.max(left, right) + 1;
  }
  dfs(root)
  return ans - 1;
};