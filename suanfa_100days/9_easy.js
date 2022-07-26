// https://leetcode.cn/problems/palindrome-number/
// 9. 回文数

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0) return false;
  const str = String(x);
  const n = str.length;
  const mid = n >> 1;
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
  // if (x === 0) return true;
  // if (x < 0 || x % 10 === 0) return false;
  // let reverse = 0;
  // let rest = x;
  // while (rest >= 10) {
  //   reverse = reverse * 10 + rest % 10;
  //   rest = Math.floor(rest / 10);
  //   console.log(rest, reverse)
  // }
  // return (reverse * 10 + rest) === x;
};

// console.log(isPalindrome(121));
console.log(isPalindrome(1000021))