// https://leetcode.cn/problems/permutations/
// 46. 全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const n = nums.length;
  const temp = [];
  const ans = [];
  const map = {};
  const dfs = () => {
    if (temp.length === n) {
      ans.push([...temp]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (map[i]) {
        continue;
      }
      temp.push(nums[i]);
      map[i] = true;
      dfs();
      temp.pop();
      map[i] = false;
    }
  }
  dfs();
  return ans;
};

console.log(permute([1,2,3]));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]