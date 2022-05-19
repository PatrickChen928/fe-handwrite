// https://leetcode.cn/problems/generate-parentheses/
// 22. 括号生成

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = [];
  const dfs = (l, r, str) => {
    if (str.length === 2 * n) {
      ans.push(str);
      return;
    }
    if (l > 0) {
      dfs(l - 1, r, str + '(');
    }
    if (l < r) {
      dfs(l, r - 1, str + ')');
    }
  }
  dfs(n, n, '');
  return ans;
};

console.log(generateParenthesis(3))