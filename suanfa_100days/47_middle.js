// https://leetcode.cn/problems/permutations-ii/
// 47. 全排列 II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  const temp = [];
  const map = {};
  const dfs = () => {
    if (temp.length === n) {
      ans.push([ ...temp ]);
      return;
    }
    let val;
    for (let i = 0; i < n; i++) {
      if (map[i] || val === nums[i]) {
        continue;
      }
      temp.push(nums[i]);
      map[i] = true;
      dfs();
      val = temp.pop();
      map[i] = false;
    }
  }
  dfs();
  return ans;
};

console.log(permuteUnique([1,1,2]));