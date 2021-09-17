/**
 * let aBind = a.bind(this, 1, 2)
 * 1. 绑定this
 * 2. 可以传参数，返回一个函数
 * 3. 返回的函数如果作为构造函数，this绑定该构造函数
 */

Function.prototype.bind2 = function(obj) {
  let self = this;
  if (typeof self != 'function') throw Error('error');
  let args = Array.prototype.slice.call(arguments, 1);
  function res() {
    let _args = Array.prototype.slice.call(arguments, 0);
    return self.apply(this instanceof self ? this : obj, [...args, ..._args]);
  }

  function empty() {}
  empty.prototype = self.prototype;
  res.prototype = new empty();
  return res;
}

let obj = {
  a: 1
}

function testFunc() {
  this.b = 2;
  console.log(this, [...arguments])
}


let newTest = testFunc.bind2(obj, 1, 2);
newTest(3); // { a: 1, b: 2 } [ 1, 2, 3 ]

new newTest(4, 5); // { b: 2 } [ 1, 2, 4, 5 ]
