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
