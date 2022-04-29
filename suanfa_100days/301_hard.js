// https://leetcode-cn.com/problems/remove-invalid-parentheses/
// 301. 删除无效的括号

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const n = s.length;
  const res = [];
  // 1. 回溯 + 剪枝
  let lRemove = 0, rRemove = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      lRemove++;
    } else if (s[i] === ')') {
      if (lRemove === 0) {
        rRemove++;
      } else {
        lRemove--;
      }
    }
  }
  if (lRemove === 0 && rRemove === 0 && isValid(s)) {
    return [s];
  }
  function helper(str, start, lRemove, rRemove) {
    // 剪枝
    if (lRemove === 0 && rRemove === 0) {
      if (isValid(str)) {
        res.push(str);
        return;
      }
    }
    for (let i = start; i < str.length; i++) {
      if (i > start && str[i] === str[i - 1]) {
        continue;
      }
      // 剪枝
      if (lRemove + rRemove > str.length - i) {
        return;
      }
      if (lRemove > 0 && str[i] === '(') {
        helper(str.substr(0, i) + str.substr(i + 1), i, lRemove - 1, rRemove);
      }
      if (rRemove > 0 && str[i] === ')') {
        helper(str.substr(0, i) + str.substr(i + 1), i, lRemove, rRemove - 1);
      }
    }
  }

  function isValid(str) {
    let ln = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ')') {
        if (ln === 0) {
          return false;
        } else {
          ln--;
        }
      } else if (str[i] === '(') {
        ln++;
      }
    }
    return ln === 0;
  }

  helper(s, 0, lRemove, rRemove);
  return res;

  // 2. 广度优先搜索
};

console.log(removeInvalidParentheses("(((k()(("))

'()()()', '(())()'