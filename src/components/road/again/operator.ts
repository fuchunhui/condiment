const s1 = '2';
const s2 = 'z';
const b = false;
let f = 1.1;
const o = {
  valueOf() {
    return -1;
  }
};

console.log(s1); // ++
console.log(s2); // ++
console.log(b); // ++
console.log(f--, f);
console.log(o, o); // --

export {};
