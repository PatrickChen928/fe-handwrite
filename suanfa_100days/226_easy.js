// https://leetcode.cn/problems/invert-binary-tree/
// 226. 翻转二叉树

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
var invertTree = function(root) {
  // 1. dfs
  // if (root === null) return null;
  // const temp = root.left;
  // root.left = root.right;
  // root.right = temp;
  // invertTree(root.left);
  // invertTree(root.right);
  // return root;

  // 2. bds
  if (root === null) return null;
  const stack = [root];
  while(stack.length) {
    const n = stack.length;
    for (let i = 0; i < n; i++) {
      const node = stack.shift();
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return root;
};