// https://leetcode.cn/problems/maximum-product-subarray/
// 152. 乘积最大子数组

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

  // 1. 暴力
  // const n = nums.length;
  // let max = -Infinity;
  // for (let i = 0; i < n; i++) {
  //   let val = nums[i];
  //   max = Math.max(max, val);
  //   for (let j = i + 1; j < n; j++) {
  //     val = val * nums[j];
  //     max = Math.max(max, val);
  //   }
  // }
  // return max;

  // 2. 动态规划
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  let ans = min = max = nums[0];
  for (let i = 1; i < n; i++) {
    const curr = nums[i];
    const mx = max, mn = min;
    max = Math.max(mx * curr, Math.max(curr, mn * curr));
    min = Math.min(mn * curr, Math.min(mx * curr, curr));
    ans = Math.max(max, ans);
  }
  return ans;
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));