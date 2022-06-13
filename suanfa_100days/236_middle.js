// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// 236. 二叉树的最近公共祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 后续遍历
  // 1. 
  // let ans = root;
  // const dfs = (root) => {
  //   if (root === null) return false;
  //   const left = dfs(root.left);
  //   const right = dfs(root.right);
  //   if ((left && right) || ((root.val === p.val || root.val === q.val) && (left || right))) {
  //     ans = root;
  //   }
  //   return left || right || (root.val === p.val || root.val === q.val);
  // }
  // dfs(root);
  // return ans;

  const dfs = (node) => {
    if (node === null || node === p || node === q) return node;
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (left && right) {
      return node;
    }
    return left || right;
  }
  return dfs(root);
};
