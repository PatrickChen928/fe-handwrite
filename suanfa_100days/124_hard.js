// https://leetcode.cn/problems/binary-tree-maximum-path-sum/
// 124. 二叉树中的最大路径和

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
var maxPathSum = function(root) {
  let ans = -Infinity;
  const dfs = (node) => {
    if (node === null) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    ans = Math.max(ans, left + right + node.val);
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return ans;
};

console.log(maxPathSum([1,2,3]))