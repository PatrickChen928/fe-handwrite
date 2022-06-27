// https://leetcode.cn/problems/burst-balloons/
// 312. 戳气球

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 1. 回溯法
  // let ans = 0;
  // const dfs = (nums, coins) => {
  //   if (nums.length === 0) {
  //     ans = Math.max(ans, coins);
  //     return;
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     const temp = nums[i];
  //     const count = (i === 0 ? 1 : nums[i - 1]) * temp * (i === nums.length -  1 ? 1 : nums[i + 1]);
  //     nums.splice(i, 1);
  //     dfs(nums, count + coins);
  //     nums.splice(i, 0, temp);
  //   }
  // }
  // dfs(nums, 0);
  // return ans;

  // 2. 动态规划
  nums.unshift(1);
  nums.push(1);
  let length = nums.length;
  let dp = Array.from(new Array(length), () => new Array(length).fill(0));
    var partMaxCoins = function(start, end){
      let maxCoins = 0;
      for(let i = start + 1; i < end; i++){
          let x1 = nums[start] * nums[i] * nums[end];
          let x2 = dp[start][i] + dp[i][end];
          maxCoins = Math.max(maxCoins, x1 + x2);
      }
      dp[start][end] = maxCoins;
  }
  for(let i = 2; i < length; i++){
      for(let start = 0; start < length - i ; start++){
          partMaxCoins(start, start + i);
      }
  }

  
  return dp[0][length-1];
};

console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([1, 5]));
