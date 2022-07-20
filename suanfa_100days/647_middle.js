// https://leetcode.cn/problems/palindromic-substrings/
// 647. 回文子串

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  // const n = s.length;
  // let ans = 0;
  // const isPalindromic = (str) => {
  //   const n = str.length;
  //   const mid = n >> 1;
  //   for (let i = 0; i < mid; i++) {
  //     if (str[i] !== str[n - i - 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // const dfs = (i, str) => {
  //   if (i === n) return false;
  //   const newStr = str + s[i];
  //   if (isPalindromic(newStr)) {
  //     ans++;
  //   }
  //   dfs(i + 1, newStr);
  // }
  // for (let i = 0; i < n; i++) {
  //   dfs(i, '');
  // }
  // return ans;

  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
      let l = i >> 1, r = (i >> 1) + i % 2;
      while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
          --l;
          ++r;
          ++ans;
      }
  }
  return ans;
};

console.log(countSubstrings("abcde")); // 3
console.log(countSubstrings("aaa")); // 6