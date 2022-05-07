// https://leetcode-cn.com/problems/next-greater-element-ii/
// 503. 下一个更大元素 II

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  // nums = nums.concat(nums);
  // const n = nums.length;
  // const stack = [];
  // const map = {};
  // const ans = [];
  // for (let i = n - 1; i >= 0; i--) {
  //   while(stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
  //     stack.pop();
  //   }
  //   map[i] = stack.length ? nums[stack[stack.length - 1]] : -1;
  //   stack.push(i);
  // }
  // for (let i = 0; i < n / 2; i++) {
  //   ans.push(map[i]);
  // }
  // return ans;
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < n * 2 - 1; i++) {
      while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
          ret[stk[stk.length - 1]] = nums[i % n];
          stk.pop();
      }
      stk.push(i % n);
  }
  return ret;
};

console.log(nextGreaterElements([1,2,1]))