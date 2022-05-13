const person = () => {
  return {
    name: 'small',
    age: 28
  };
};

const p1 = person();
const p2 = person();
const p3 = person();

p1.age = 24;
console.log(p1);
console.log(p2);
console.log(p3);

const student = {
  name: 'zhangsan',
  age: 12
};

const people = () => student;

const s1 = people();
const s2 = people();
const s3 = people();
s1.age = 23;
console.log(s1);
console.log(s2);
console.log(s3);