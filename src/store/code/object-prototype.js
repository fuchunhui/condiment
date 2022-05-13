// 使用 setPrototypeOf 修改对象的原型，影响微妙而深远，不推荐使用
const biped = {
  numLegs: 2
};

const person = {
  name: 'Matt'
};

Object.setPrototypeOf(person, biped);

console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true

// 使用 Object.create() 创建新对象，并指定原型
const person1 = Object.create(biped);
person1.name = 'Matt';

console.log(person1.name); // Matt
console.log(person1.numLegs); // 2
console.log(Object.getPrototypeOf(person1) === biped); // true

// 层级示例，Object.hasOwnProperty()确定某个属性在实例上还是在原型对象上
// 方法继承自 Object，会在属性存在于调用它的对象实例上时返回 true

console.log('------------- Object.hasOwnProperty() -------------');
function Person() {}
Person.prototype.name = 'Nicholas';
Person.prototype.age = 24;

const p1 = new Person();
const p2 = new Person();

console.log(p1.hasOwnProperty('name')); // false
console.log('in--->', 'name' in p1); // true

p1.name = 'Greg';
console.log(p1.name);
console.log(p1.hasOwnProperty('name')); // true
console.log('in--->', 'name' in p1); // true

delete p1.name;
console.log(p1.hasOwnProperty('name')); // false
console.log('in--->', 'name' in p1); // true

console.log(Object.getOwnPropertyDescriptors(p1));

// in 操作符，可以通过对象访问指定属性时，返回 true，无论该属性在实例上还是在原型上。
// 例如上面的例子中，in 操作符都返回 true。

// 如果要确定某个属性是否存在于原型上，可以这样
const hasPrototypeProperty = (object, name) => {
  return !object.hasOwnProperty(name) && (name in object);
};
