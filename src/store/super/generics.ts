export default function (): void {
  console.log('123');

  function identity(arg: number): number {
    return arg;
  }
  function identity2(arg: any): any {
    return arg;
  }
  function identity3<T>(arg: T): T {
    return arg;
  }
  console.log(identity(121));
  console.log(identity2(false));
  const output = identity3<string>('astring');
  console.log('generics', output);

  function identity4<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }
  const output1 = identity4<string>(['astring', '23']);
  console.log('generics', output1);

  function identity5<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
  }
  console.log(identity5(['1', '2', '3']));

  const output3: <T>(arg: T) => T = identity3;
  const output4: <U>(arg: U) => U = identity3;
  const output5: { <T>(arg: T): T } = identity3;
  console.log(output3('abc'));
  console.log(output4(62.32));
  console.log(output5('1'));
  console.log('--------------------------久未放晴的天空', output3 === output5);

  interface GenericIdentityFn {
    <T>(arg: T): T;
  }
  const output6: GenericIdentityFn = identity3;
  console.log(output6('666666, 我很快就离开'));
  interface GF2<T> {
    (arg: T): T;
  }
  const output7: GF2<number> = identity3;
  console.log('generic interface: ', output7);
  // class GT<T> {
  //   zeroValue: T; // eslint-disable-line
  //   add: (x: T, y: T) => T; // eslint-disable-line
  // }
  // const output8 = new GT<number>();
  // output8.zeroValue = 0;
  // output8.add = (x, y) => {
  //   return x + y;
  // }

  interface Lengthwise {
    length: number;
  }
  function identity6<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }
  const output8 = identity6({
    length: 100,
    value: 44
  });
  console.log('generic constraints: ', output8);

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  const x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  getProperty(x, 'a');
  // getProperty(x, 'm');

  // eslint-disable-next-line
  function create<T>(c: { new (): T }): T {
    return new c(); // eslint-disable-line
  }

  class BeeKeeper {
    hasMask: boolean = false;
  }
  class Zookeeper {
    nametag: string = 'tty';
  }
  class Animal {
    numLegs: number = 8;
  }
  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }
  class Lion extends Animal {
    keeper: Zookeeper = new Zookeeper();
  }
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c(); // eslint-disable-line
  }
  console.log(createInstance(Lion).keeper.nametag);
  console.log(createInstance(Bee).keeper.hasMask);
}
