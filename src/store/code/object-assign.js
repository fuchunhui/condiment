const dest = {
  set id(value) {
    console.log(value);
  }
};
Object.assign(dest, {id: 'abc'}, {id: 'fff'}, {id: 'week'});

const dest1 = {};
const src1 = {a: {}};
Object.assign(dest1, src1);
console.log(dest1, dest1.a === src1.a);

const dest2 = {};
const src2 = {
  a: 'foo',
  get b() {
    throw new Error();
  },
  c: 'bar'
};
try {
  Object.assign(dest2, src2);
} catch (e) {
  // console.error(e);
}

console.log('有异常的合并：', dest2);

// 以下内容是 Object.is()，判断两个值是否为同一个
console.log(`true and 1:`, Object.is(true, 1));
console.log(`{} and {}:`, Object.is({}, {}));
console.log(`'2' and 2:`, Object.is('2', 2));
console.log(`NaN and NaN:`, Object.is(NaN, NaN));
console.log(`+0 and 0`, Object.is(+0, 0));
console.log(`-0 and 0`, Object.is(-0, 0));
console.log(`+0 and -0`, Object.is(+0, -0));

console.log('------------属性枚举顺序------------');
const k1 = Symbol('k1');
const k2 = Symbol('k2');

const ooo = {
  1: 1,
  first: 'first',
  [k1]: 'symbol1',
  second: 'second',
  0: 0
};

ooo[k2] = 'symbol2';
ooo[3] = 3;
ooo.third = 'third';
ooo[2] = 2;

console.log(Object.getOwnPropertyNames(ooo));
console.log(Object.getOwnPropertySymbols(ooo));

console.log('------------对象迭代------------');
const o = {
  foo: 'bar',
  baz: 1,
  qux: {}
};

console.log(Object.values(o)); // 返回对象的数组
console.log(Object.entries(o)); // 返回键/值对的数组

console.log('------------原型对象字面量------------');

function Person() {}

Person.prototype = { // Person.prototype.constructor 不再指向 Person，而是指向 Object
  // constructor: Person, // 重置 constructor 指向，指回 Person
  name: 'Nice',
  age: 26,
  sayName() {
    console.log(this.name);
  }
};
const friend = new Person();
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
console.log(friend.constructor === Object); // true
console.log(friend.constructor === Person); // false

console.log(Object.values(Person.prototype));
Object.defineProperty(Person.prototype, 'constructor', { // 更好的方式恢复 constructor 属性的不可枚举，保证默认行为
  enumerable: false,
  value: Person
});

console.log(Object.values(Person.prototype));
