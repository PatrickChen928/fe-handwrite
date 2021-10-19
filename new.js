function createNew(func, ...args) {
  const instance = {};
  const res = func.apply(instance, args);
  instance.__proto__ = func.prototype;
  const type = typeof res;
  return (type === 'object' && res !== null) || type === 'function' ? res : instance;
}

function Test(name) {
  this.name = name; 
}
Test.prototype.getName = function() {
  return this.name;
}

let test = new Test('222');
console.log(createNew(Test, 222));
