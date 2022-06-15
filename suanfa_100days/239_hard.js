// https://leetcode.cn/problems/sliding-window-maximum/
// 239. 滑动窗口最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  let ans = [];
  const queue = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const now = i - k + 1;
    if (now > 0 && queue[0] === nums[now - 1]) {
      queue.shift();
    }
    while(queue.length && queue[queue.length - 1] < num) {
      queue.pop();
    }
    queue.push(num);
    if (now >= 0) {
      ans.push(queue[0]);
    }
  }
  return ans;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([7,2,4], 2));