// https://leetcode.cn/problems/longest-valid-parentheses/
// 32. 最长有效括号

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // 1. 暴力法
  // const n = s.length;
  // if (n < 2) return 0;
  // let left = 0;
  // const dp = new Array(n - 1).fill(false);
  // for (let i = 0; i < n; i++) {
  //   if (s[i] === ')' && left > 0) {
  //     left--;
  //     dp[i] = true;
  //     let j = i - 1;
  //     while(j > 0 && dp[j]) {
  //       j--;
  //     }
  //     dp[j] = true;
  //   } else if (s[i] === '(') {
  //     left++;
  //   }
  // }
  // let max = 0, curr = 0;
  // for (let i = 0; i < n; i++) {
  //   if (dp[i]) {
  //     curr++;
  //   } else {
  //     max = Math.max(curr, max);
  //     curr = 0;
  //   }
  // }
  // max = Math.max(curr, max);
  // return max;

  // 2. 动态规划
  // const n = s.length;
  // if (n < 2) return 0;
  // const dp = new Array(n).fill(0);
  // let max = 0;
  // for (let i = 1; i < n; i++) {
  //   if (s[i] === ')') {
  //     if (s[i - 1] === '(') {
  //       dp[i] = (i > 2 ? dp[i - 2] : 0) + 2;
  //     } else if (i - dp[i - 1] >= 1 && s[i - dp[i - 1] - 1] === '(') {
  //       dp[i] = dp[i - 1] + (i - dp[i - 1] - 2 > 0 ? dp[i - dp[i - 1] - 2] : 0) + 2;
  //     }
  //     max = Math.max(dp[i], max);
  //   }
  // }
  // return max;

  // 3. 栈
  // const n = s.length;
  // if (n < 2) return 0;
  // const stack = [ -1 ];
  // let max = 0;
  // for (let i = 0; i < n; i++) {
  //   if (s[i] === '(') {
  //     stack.push(i)
  //   } else {
  //     stack.pop();
  //     if (stack.length === 0) {
  //       stack.push(i);
  //     } else {
  //       max = Math.max(max, i - stack[stack.length - 1]);
  //     }
  //   }
  // }
  // return max;

  // 4. 两次遍历
  const n = s.length;
  if (n < 2) return 0;
  let left = 0, right = 0, max = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (right > left) {
      left = right = 0;
    } else if (left === right) {
      max = Math.max(max, 2 * right);
    }
  }
  left = right = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (right < left) {
      left = right = 0;
    } else if (left === right) {
      max = Math.max(max, 2 * left);
    }
  }
  return max;
};

console.log(longestValidParentheses("(()()"));