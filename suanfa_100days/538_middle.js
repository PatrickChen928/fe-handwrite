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
  // 中序深度遍历， add 指的是父节点的累加值；
  function dps(node, add = 0) {
    if (!node) { 
        return node;
    }
    let res = add;
    if (node.right !== null) {
        // 对于右侧节点，其累加值是在父节点的父节点上基础进行的， 所以有res存在；
        res = dps(node.right, res);
    }
    // 当前节点是在右子节点基础上进行累加的
    node.val = node.val + res;
    res = node.val;
    if (node.left !== null) {
        // 有左侧节点，其累加基础技术节点累加后的值；累加后，那么左侧值肯定就是最大的，会作为下一个累加值
        res = dps(node.left, res);
    }
    return res;
  }
  dps(root, 0);
  return root;
};