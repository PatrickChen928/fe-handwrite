// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
// 剑指 Offer 59 - I. 滑动窗口的最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
   if (nums.length === 0 || k === 0) return [];
  const arr = [];
  const n = nums.length;
  let curr = -k;
  // 单调列
  let deque = [];
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    curr++;
    // 如果队列满了，删除第一个
    if (curr > 0 && deque[0] === nums[curr - 1]) {
      deque.shift();
    }
    // 始终保持第一个是最大的，把之前的小于现在的全删了,这里用小于而不用小于等于是因为留一个给上一步清
    while(deque.length && deque[deque.length - 1] < num) {
      deque.pop();
    }
    deque.push(num);
    // 到了滑动窗口就开始把数值放进去
    if (curr >= 0) {
      arr.push(deque[0]);
    }
  }
  return arr;
};

console.log(maxSlidingWindow([-7,-8,7,5,7,1,6,0], 4))