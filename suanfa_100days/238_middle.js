// https://leetcode.cn/problems/product-of-array-except-self/
// 238. 除自身以外数组的乘积

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // const n = nums.length;
  // let ans = [];
  // let count = 1;
  // let zero = 0;
  // for (let i = 0; i < n; i++) {
  //   if (nums[i] != 0) {
  //     count *= nums[i];
  //   } else {
  //     zero++;
  //   }
  // }
  // if (zero > 1) {
  //   return new Array(n).fill(0);
  // }
  // for (let j = 0; j < n; j++) {
  //   ans[j] = nums[j] === 0 ? count : (zero === 1 ? 0 : (count / nums[j]));
  // }
  // return ans;

  const n = nums.length;
  let ans = [1];
  let R = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = ans[i] * R;
    R = R * nums[i];
  }
  return ans;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,3,3]));
