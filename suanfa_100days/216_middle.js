// https://leetcode.cn/problems/combination-sum-iii/
// 216. 组合总和 III

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
*/
var combinationSum3 = function(k, n) {
  const ans = [];
  const temp = [];
  let sum = 0;
  const dfs = (curr) => {
    if (sum === n && temp.length === k) {
      ans.push([...temp]);
      return;
    }
    if (curr > 9 || sum > n || (n - curr + temp.length + 1) < k) return;
    for (let i = curr; i < Math.min(n + 1, 10); i++) {
      temp.push(i);
      sum += i;
      dfs(i + 1);
      temp.pop();
      sum -= i;
    }
  }
  dfs(1);
  return ans;
};

console.log(combinationSum3(3, 9));