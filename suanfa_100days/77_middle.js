// https://leetcode.cn/problems/combinations/
// 77. 组合

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // 1. bfs
  const temp = [];
  const ans = [];
  for (let i = 1; i <= k; i++) {
    temp.push(i);
  }
  temp.push(n + 1);
  let j = 0;
  while(j < k) {
    ans.push(temp.slice(0, k));
    j = 0;
    while (j < k && temp[j] + 1 === temp[j + 1]) {
      temp[j] = j + 1;
      j++;
    }
    temp[j]++;
  }
  return ans;
  // 2. dfs
  // const t = [];
  // const ans = [];
  // const dfs = (curr) => {
  //   if (n - curr + 1 + t.length < k) {
  //     return;
  //   }
  //   if (curr === n + 1) {
  //     t.length === k && ans.push(t.slice());
  //     return;
  //   }
  //   t.push(curr);
  //   dfs(curr + 1);
  //   t.pop();
  //   dfs(curr + 1);
  // }
  // dfs(1);
  // return ans;
};

console.log(combine(6, 4));

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]