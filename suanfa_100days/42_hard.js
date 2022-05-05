// https://leetcode-cn.com/problems/trapping-rain-water/
// 42. 接雨水

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  const stack = [];
  let ans = 0;
  // 1. 单调栈 - 中规中矩
  // for (let i = 0; i < n; i++) {
  //   while(stack.length && height[i] > height[stack[stack.length - 1]]) {
  //     const top = stack.pop();
  //     if (!stack.length) {
  //       break;
  //     }
  //     const left = stack[stack.length - 1];
  //     const currWidth = i - left - 1;
  //     const currHeight = Math.min(height[left], height[i]) - height[top];
  //     ans += currHeight * currWidth;
  //   }
  //   stack.push(i);
  // }
  // return ans;

  // 2. 动态规划 - 神奇的规划
  // const leftMax = new Array(n).fill(0);
  // leftMax[0] = height[0];
  // for (let i = 1; i < n; ++i) {
  //     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  // }
  // console.log(leftMax);
  // const rightMax = new Array(n).fill(0);
  // rightMax[n - 1] = height[n - 1];
  // for (let i = n - 2; i >= 0; --i) {
  //     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  // }
  // console.log(rightMax);
  // // let ans = 0;
  // for (let i = 0; i < n; ++i) {
  //     ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  // }
  // return ans;

  // 3. 双指针 - 奇思妙想
  let left = 0, right = n - 1;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
        ans += leftMax - height[left];
        ++left;
    } else {
        ans += rightMax - height[right];
        --right;
    }
  }
  return ans;
};

console.log(trap([0,0,0,1,0,2,1,0,1,3,2,1,2,1]))