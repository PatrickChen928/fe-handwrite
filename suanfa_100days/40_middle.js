// https://leetcode.cn/problems/combination-sum-ii/
// 40. 组合总和 II

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort();
  const n = candidates.length;
  const temp = [];
  let sum = 0;
  const ans = [];
  const dfs = (curr) => {
    if (sum === target) {
      ans.push([...temp]);
      return;
    }
    if (curr >= n || sum > target) {
      return;
    }
    let hasGet = -1;
    for (let i = curr; i < n; i++) {
      const val = candidates[i];
      if (val === hasGet) continue;
      temp.push(val);
      sum += val;
      hasGet = val;
      dfs(i + 1);
      temp.pop();
      sum -= val;
    }
  }
  dfs(0);
  return ans;
};

console.log(combinationSum2([2,2,2], 4));