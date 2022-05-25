// https://leetcode.cn/problems/word-search/
// 79. 单词搜索

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const len = word.length;
  const visted = Array.from({length: m}, () => new Array(n).fill(false))
  const dfs = (i, j, k) => {
    if (board[i][j] != word[k]) {
      return false;
    }
    if (k === len - 1) {
      return true;
    }
    visted[i][j] = true;
    if (i > 0 && !visted[i - 1][j]) {
      if (dfs(i - 1, j, k + 1)) {
        return true;
      }
    }
    if (i < m - 1 && !visted[i + 1][j]) {
      if (dfs(i + 1, j, k + 1)) {
        return true;
      }
    } 
    if (j > 0 && !visted[i][j - 1]) {
      if (dfs(i, j - 1, k + 1)) {
        return true;
      }
    }
    if (j < n - 1 && !visted[i][j + 1]) {
      if (dfs(i, j + 1, k + 1)) {
        return true;
      }
    };
    visted[i][j] = false;
    return false;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
,"ABCESEEEFS"))