/**
首先创建了一个新的空对象
设置原型，将对象的原型设置为函数的prototype对象。
让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
**/

const createNew = func => {
  const target = {}; // 1.在内存中创建一个新对象
  target.__proto__ = func.prototype; // 2.新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性
  const res = func.call(target); // 3.构造函数内部的 this 被赋值为这个新对象，即 this 指向新对象
  // 4.执行构造函数内部的代码，即给新对象添加属性
  // 5.如果构造函数返回非空对象，则返回该对象，即 res；否则返回新创建的对象，即 target
  if (typeof res === 'object' || typeof res === 'function') {
    return res;
  }
  return target;
};

const testa = new Object();
console.log(testa);

const testb = createNew(Object);
console.log(testb);

/**
 * 看过多少遍，还是一脸懵逼的状态。
 * 
 * http://www.mollypages.org/tutorials/js.mp
 * 这个图不错
 */