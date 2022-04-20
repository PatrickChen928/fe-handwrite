// https://leetcode-cn.com/problems/3sum/
// 15. 三数之和


const input = [-2,0,0,2,2];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  // 排序 + 双指针
  let res = [];
  const n = nums.length;
  if (n < 3) {
    return res;
  }
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        L++;
        while(L < R && nums[L] === nums[L - 1]) L++;
        R--;
        while(L < R && nums[R + 1] === nums[R]) R--;
      } else if (sum < 0) {
        L++;
        while(L < R && nums[L] === nums[L - 1]) L++;
      } else {
        R--;
        while(L < R && nums[R + 1] === nums[R]) R--;
      }
    }
  }
  return res;
};

console.log(threeSum(input));