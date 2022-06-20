// https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
// 297. 二叉树的序列化与反序列化

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  return rdserialize(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  return rddeserialize(data.split(','));
};

function rdserialize(node, str) {
  if (node === null) {
    str += 'None,';
  } else {
    str += root.val + ',';
    str = rdserialize(node.left, str);
    str = rdserialize(node.right, str);
  }
  return str;
}

function rddeserialize(dataList) {
  if (dataList[0] === 'None') {
    dataList.shift();
    return null;
  }
  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rddeserialize(dataList);
  root.right = rddeserialize(dataList);
  return root;
}