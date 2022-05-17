// https://leetcode.cn/problems/regular-expression-matching/
// 10. 正则表达式匹配

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = new Array(m + 1).fill('').map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
        if (matchs(s, p, i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        if (matchs(s, p, i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[m][n];
};

function matchs(s, p, i, j) {
  if (i == 0) {
    return false;
  }
  if (p.charAt(j - 1) == '.') {
    return true;
  }
  return s.charAt(i - 1) == p.charAt(j - 1);
}

console.log(isMatch("aa", ".*ab"));