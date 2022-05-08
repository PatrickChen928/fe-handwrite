// https://leetcode-cn.com/problems/subsets/
// 78. 子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // 1. 递归
  // const n = nums.length;
  // const ans = [];
  // const temp = [];
  // const dfs = (curr) => {
  //   if (curr === n) {
  //     ans.push(Array.from(temp));
  //     return;
  //   }
  //   temp.push(nums[curr]);
  //   dfs(curr + 1);
  //   temp.pop();
  //   dfs(curr + 1);
  // }
  // dfs(0);
  // return ans;

  // 2. 迭代
  const ans = [[]];
  const n = nums.length;
  for (let i = 1; i < (1 << n); i++) {
    const t = [];
    for (let j = 0; j < n; j++) {
      if (i & 1 << j) {
        t.push(nums[j]);
      }
    }
    ans.push(t);
  }
  return ans;
};

console.log(subsets([1,2,3, 4]));