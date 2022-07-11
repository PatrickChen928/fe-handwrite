// https://leetcode.cn/problems/path-sum-iii/
// 437. 路径总和 III

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  // 1. dfs
  // if (root === null) return 0;
  // const dfs = (node, sum) => {
  //   if (node === null) return 0;
  //   let ans = 0;
  //   const val = node.val;
  //   if (val === sum) {
  //     ans++;
  //   }
  //   ans += dfs(node.left, sum - val);
  //   ans += dfs(node.right, sum - val);
  //   return ans;
  // }
  // let ans = dfs(root, targetSum);
  // ans += pathSum(node.left, targetSum);
  // ans += pathSum(node.right, targetSum);
  // return ans;

  // 2. 前缀和
  const prefixMap = { 0: 1 };
  const dfs = (node, sum) => {
    if (node === null) return 0;
    sum += node.val;
    let ret = prefixMap[sum - targetSum] || 0;
    prefixMap[sum] = (prefixMap[sum] || 0) + 1;
    ret += dfs(node.left, sum);
    ret += dfs(node.right, sum);
    prefixMap[sum] = (prefixMap[sum] || 0) - 1;
    return ret;
  }
  return dfs(root, 0);
};