// https://leetcode.cn/problems/merge-two-binary-trees/
// 617. 合并二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  // 1. dfs
  // if (root1 === null) return root2;
  // if (root2 === null) return root1;
  // const root = new TreeNode(root1.val + root2.val);
  // root.left = mergeTrees(root1.left, root2.left);
  // root.right = mergeTrees(root1.right, root2.right);
  // return root;

  // 2.bfs
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const merged = new TreeNode(root1.val + root2.val);
  const queue1 = [merged];
  const queue2 = [root1];
  const queue3 = [root2];
  while(queue2.length && queue3.length) {
    const node = queue1.pop(), r1 = queue2.pop(), r2 = queue3.pop();
    if (r1.left || r2.left) {
      if (r1.left && r2.left) {
        node.left = new TreeNode(r1.left.val + r2.left.val);
        queue1.push(node.left);
        queue2.push(r1.left);
        queue3.push(r2.left);
      } else if (r1.left) {
        node.left = r1.left;
      } else {
        node.left = r2.left;
      }
    }
    if (r1.right || r2.right) {
      if (r1.right && r2.right) {
        node.right = new TreeNode(r1.right.val + r2.right.val);
        queue1.push(node.right);
        queue2.push(r1.right);
        queue3.push(r2.right);
      } else if (r1.right) {
        node.right = r1.right;
      } else {
        node.right = r2.right;
      }
    }
  }
  return merged;
};