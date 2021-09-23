class Bar {}
class Baz extends Bar {
  static [Symbol.hasInstance]() {
    return false;
  }
}

const b = new Baz();
console.log(Bar[Symbol.hasInstance](b));
console.log(b instanceof Bar);
console.log(Baz[Symbol.hasInstance]());
console.log(b instanceof Baz);

class Foo {
  // eslint-disable-next-line require-yield
  *[Symbol.iterator]() {
    console.log('iterator');
  }
}
const f = new Foo();
console.log(f[Symbol.iterator]());

// class Emitter {
//     public idxs = 0;
//     public max = 0;
//     constructor(max) {
//         this.max = max;
//         this.idxs = 0;
//     }
//     *[Symbol.iterator]() {
//         while (this.idxs < this.max) {
//             yield this.idxs++;
//         }
//     }
// }

// function count() {
//     const emitter = new Emitter(5);
//     for (const x of emitter) {
//         console.log(x);
//     }
// }
// count();

class FooMatcher {
  static [Symbol.match](target: any) {
    return target.includes('foo');
  }
}

console.log('foobar'.match(FooMatcher)); // true
console.log('barbaz'.match(FooMatcher)); // false

class StringMatcher {
  str = '';
  constructor(str: string) {
    this.str = str;
  }
  [Symbol.match](target: any) {
    return target.includes(this.str);
  }
}

console.log('foobar'.match(new StringMatcher('foo'))); // true
console.log('barbaz'.match(new StringMatcher('qux'))); // false

class FooReplacer {
  static [Symbol.replace](target: string, replacement: string) {
    return target.split('foo').join(replacement);
  }
}
console.log('barfoobaz'.replace(FooReplacer, 'qux'));

class StringReplacer {
  str = '';
  constructor(str: string) {
    this.str = str;
  }
  [Symbol.replace](target: string, replacement: string) {
    return target.split(this.str).join(replacement);
  }
}
console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux'));

class SBar extends Array {}
class SBaz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
let sbar = new SBar();
console.log(sbar instanceof Array);
console.log(sbar instanceof SBar);

sbar = sbar.concat('sbar');
console.log(sbar instanceof Array);
console.log(sbar instanceof SBar);
console.log('species split');

let sbaz = new SBaz();
console.log(sbaz instanceof Array);
console.log(sbaz instanceof SBaz);

sbaz = sbaz.concat('sbaz');
console.log(sbaz instanceof Array);
console.log(sbaz instanceof SBaz);

// Symbol.toPrimitive

const s = new Set();
console.log(s);
console.log(s.toString());
console.log(s[Symbol.toStringTag]);

class Too {}
const too = new Too();
console.log(too);
console.log(too.toString());
// console.log(too[Symbol.toStringTag]);

class Tar {
  constructor() {
    // this[Symbol.toStringTag] = 'Tar';
  }
}
const tar = new Tar();
console.log(tar);
console.log(tar.toString());
// console.log(tar[Symbol.toStringTag]);
