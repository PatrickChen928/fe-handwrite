// https://leetcode.cn/problems/regular-expression-matching/
// 10. 正则表达式匹配

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // const m = s.length;
  // const n = p.length;
  // const dp = new Array(m + 1).fill('').map(() => new Array(n + 1).fill(false));
  // dp[0][0] = true;
  // for (let i = 0; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (p[j - 1] === '*') {
  //       dp[i][j] = dp[i][j - 2];
  //       if (matchs(s, p, i, j - 1)) {
  //         dp[i][j] = dp[i][j] || dp[i - 1][j];
  //       }
  //     } else {
  //       if (matchs(s, p, i, j)) {
  //         dp[i][j] = dp[i - 1][j - 1];
  //       }
  //     }
  //   }
  // }
  // return dp[m][n];

  const n = s.length, m = p.length;
  const f = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));
  f[0][0] = true;
  
  s = ' ' + s;
  p = ' ' + p;
  
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (j + 1 <= m && p[j + 1] === '*') continue;
      if (i !== 0 && p[j] !== '*')
        // 正常情况 
        f[i][j] = f[i - 1][j - 1] && (s[i] === p[j] || p[j] === '.');
      if (p[j] === '*')
        // 1. ab abb*
        // 2. ab ab* / ac ab*
        f[i][j] = f[i][j - 2] || (i !== 0 && f[i - 1][j] && (s[i] === p[j - 1] || p[j - 1] === '.'));
    }
  }
  console.log(f)
  return f[n][m];
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

console.log(isMatch("aa", "a*ab"));