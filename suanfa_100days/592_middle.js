// https://leetcode.cn/problems/fraction-addition-and-subtraction/
// 592. 分数加减运算

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const gcd = (a, b) => {
    let remainder = a % b;
    while (remainder != 0) {
      a = b; // 6 4
      b = remainder; // 4 2
      remainder = a % b; // 2 0
    }
    return b;
  }
  const n = expression.length;
  const digetReg = /[0-9]/
  let i = 0;
  let denominator = 0, numerator = 1;
  while(i < n) {
    let denominator1 = 0, sign = 1;
    const char = expression[i];
    if (char === '+' || char === '-') {
      if (char === '-') sign = -1;
      i++;
    }
    while(i < n && digetReg.test(expression[i])) {
      denominator1 = denominator1 * 10 + Number(expression[i]);
      i++;
    }
    denominator1 = sign * denominator1;
    i++;

    let numerator1 = 0;
    while(i < n && digetReg.test(expression[i])) {
      numerator1 = numerator1 * 10 + Number(expression[i]);
      i++;
    }
    denominator = denominator * numerator1 + numerator * denominator1;
    numerator *= numerator1;
  }
  if (denominator === 0) {
    return '0/1';
  }
  const g = gcd(Math.abs(denominator), numerator);
  return Math.floor(denominator / g) + "/" + Math.floor(numerator / g);
};



console.log(fractionAddition("-1/2+1/2"));