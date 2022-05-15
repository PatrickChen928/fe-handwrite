// https://leetcode.cn/problems/longest-palindromic-substring/
// 5. 最长回文子串

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 1. 动态规划
  // let n = s.length;
  // let res = '';
  // let dp = Array.from(new Array(n),() => new Array(n).fill(false));//初始化数组
  // for(let i = n-1;i >= 0;i--){//循环字符串
  //   for(let j = i;j < n;j++){
  //     dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
  //     if(dp[i][j] && j - i +1 > res.length){//当前回文子串比之前的大，更新最大长度
  //       res = s.substring(i,j+1);
  //     }
  //   }
  // }
  // return res;

  // 2. 中心扩展法
  const spread = (left, right) => {
    while(left >=0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  const n = s.length;
  let begin = 0, end = 0;
  for (let i = 0; i < n; i++) {
    const len1 = spread(i, i);
    const len2 = spread(i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - begin + 1) {
      begin = i - Math.floor((len - 1)/ 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(begin, end + 1);
};

console.log(longestPalindrome("babad"));