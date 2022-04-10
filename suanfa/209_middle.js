// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
//  209. 长度最小的子数组

// 1. 暴力法 O(n2)
 var minSubArrayLen = function(target, nums) {
  let n = nums.length;
  if (n === 0) return 0;
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
      let sum = nums[i];
      if (sum >= target) return 1;
      for (let j = i + 1; j < n; j++) {
          sum += nums[j];
          if (sum >= target) {
              ans = Math.min(ans, j - i + 1);
              break;
          }
      }
  }
  return ans === Infinity ? 0 : ans;
};

// 2. 滑动窗口 O(n)
var minSubArrayLen_2 = function(target, nums) {
  let n = nums.length;
  if (n === 0) return 0;
  let start = 0;
  let ans = Infinity;
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += nums[i];
      if (sum >= target) {
        for (let j = start; j <= i; j++) {
          sum -= nums[j];
          if (sum >= target) {
            start++;
          } else {
              sum += nums[j];
              break;
          }
        }
        ans = Math.min(ans, i - start + 1);
      }
  }
  return ans === Infinity ? 0 : ans;
};