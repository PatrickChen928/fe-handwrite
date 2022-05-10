// https://leetcode.cn/problems/combination-sum/
// 39. 组合总和

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const n = candidates.length;
  const temp = [];
  let sum = 0;
  const ans = [];
  const dfs = (curr) => {
    if (sum > target || curr === n) {
      return;
    }
    if (sum === target) {
      ans.push(temp.slice());
      return;
    }
    
    const currVal = candidates[curr];
    if (currVal + sum <= target) {
      temp.push(currVal);
      sum += currVal;
      dfs(curr);
      temp.pop();
      sum -= currVal;
    }
    dfs(curr + 1);
  }
  dfs(0);
  return ans;
};
// var combinationSum = function(candidates, target) {
//   const result = [];
//   const path = [];
//   const n = candidates.length;
//   let sum = 0;
//   let count = 0;
//   const walk = (index) => {
//     count++;
//       if (index === n) return;
//       if (sum > target) return;

//       if (sum === target) {
//           result.push([...path]);
//       }

//       for (let i = index; i < n; i++) {
//           if (sum + candidates[i] <= target) {
//             path.push(candidates[i]);
//             sum += candidates[i];
//             walk(i);
//             sum -= candidates[i];
//             path.pop();
//           }
//       }
//   };

//   walk(0);
//   console.log(count);
//   return result;
// };
console.log(combinationSum([2,3,8,4], 6));