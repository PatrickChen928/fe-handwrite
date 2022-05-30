// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 105. 从前序与中序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // 1. 递归
  // const n = preorder.length;
  // const map = {};
  // for (let i = 0; i < n; i++) {
  //   map[inorder[i]] = i;
  // }
  // const build = (p_l, p_r, i_l, i_r) => {
  //   if (p_l > p_r) return null;
  //   const root = new TreeNode(preorder[p_l]);
  //   const index = map[preorder[p_l]];
  //   const leftLen = index - i_l;
  //   root.left = build(p_l + 1, p_l + leftLen, i_l, index - 1);
  //   root.right = build(p_l + leftLen + 1, p_r, index + 1, i_r);
  //   return root;
  // }
  // return build(0, n - 1, 0, n - 1);

  // 2. 迭代
  const root = new TreeNode(preorder[0]);
  const stack = [root];
  const n = preorder.length;
  let index = 0;
  for (let i = 1; i < n; i++) {
    const node = stack[stack.length - 1];
    if (node.val !== inorder[index]) {
      node.left = new TreeNode(preorder[i]);
      stack.push(node.left);
    } else {
      while(stack.length && stack[stack.length - 1].val === inorder[index]) {
        node = stack.pop();
        index++;
      }
      node.right = new TreeNode(preorder[i]);
      stack.push(node.right);
    }
  }
  return root;
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));