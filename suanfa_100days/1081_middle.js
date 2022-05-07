// https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/
// 1081. 不同字符的最小子序列

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  const len = s.length;
  let stack = [];
  const map = {};
  for (let i = 0; i < len; i++) {
      map[s[i]] = map[s[i]] ? (map[s[i]] + 1) : 1;
  }
  const vis = {};
  const count = Object.keys(map).length;
  for (let i = 0; i < len; i++) {
    // 剪枝
    if (stack.length === count) {
      break;
    }
    // 因为如果前面已经有小的了，就不要再这个了。
    // 比如babca,到第二个a的时候，前面已经处理过a了，这时候如果一味把bc干掉就会出问题了。
    if (!vis[s[i]]) {
      while(stack.length && stack[stack.length - 1] >= s[i] && map[stack[stack.length - 1]]) {
        vis[stack[stack.length - 1]] = 0;
        stack.pop();
      }
      vis[s[i]] = 1;
      stack.push(s[i]);
    }
    map[s[i]]--;
  }
  return stack.join('');
};

console.log(smallestSubsequence("cbaacabcaaccaacababa"));
console.log(smallestSubsequence("cbacdcbc"));
console.log(smallestSubsequence("babca"));