// https://leetcode.cn/problems/target-sum/
// 494. 目标和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // 1. 回溯
  // const n = nums.length;
  // let ans = 0;
  // const map = {};
  // const dfs = (start, num) => {
  //   if (start === n) {
  //     if (num === target) ans++;
  //     return;
  //   }
  //   dfs(start + 1, num + nums[start]);
  //   dfs(start + 1, num - nums[start]);
  // }
  // dfs(0, 0);
  // return ans;

  // 2. 动态规划
  let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    const diff = sum - target;
    if (diff < 0 || diff % 2 !== 0) {
        return 0;
    }
    const neg = Math.floor(diff / 2);
    const dp = new Array(neg + 1).fill(0);
    dp[0] = 1;
    for (const num of nums) {
        for (let j = neg; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    return dp[neg];
};

console.log(findTargetSumWays([1,1,1,1,1], 3));
console.log(findTargetSumWays([1], 1));