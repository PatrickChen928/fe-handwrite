// https://leetcode.cn/problems/decode-string/
// 394. 字符串解码

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  function parseData(s) {
    if (!(/^[0-9]/.test(s))) {
      const m = s.match(/^([a-z]+)/);
      return [m[1], m[1].length - 1];
    }
    let match = s.match(/^([0-9]+)/);
    let str = '';
    let i = match[1].length + 1;
    while(s[i] != ']') {
      if (/\d/.test(s[i])) {
        const [r, j] = parseData(s.substring(i));
        i += j;
        str += r;
      } else {
        str += s[i];
      }
      i++;
    }
    return [str.repeat(match[1]), i];
  }
  let ans = '';
  let i = 0;
  while(i < s.length) {
    const [str, j] = parseData(s.substring(i));
    i += j + 1;
    ans += str;
  }
  return ans;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("abc3[cd]xyz"))