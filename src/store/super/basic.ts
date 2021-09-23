export default function basic(): void {
  const basicTypes = () => {
    let isDone: boolean = false;
    isDone = true;
    console.log('boolean', isDone);

    const dicimal: number = 484;
    const hex: number = 0x1e4; // 十六进制
    const binary: number = 0b111100100; // 二进制
    const octal: number = 0o744; // 八进制
    const big: bigint = 100n;
    console.log('number: ', dicimal, hex, binary, octal, big);

    let color: string = 'blue';
    color = 'red';
    const fullName: string = 'Bob Bob';
    const message: string = `${fullName} is No.${dicimal}, ${color}`;
    console.log(message);

    let list: number[] = [1, 4, 5, 12];
    let children: Array<number> = [246, 123, 123];
    list.push(5);
    list = list.concat([345]);
    children = children.slice(0, 2);
    const answers: Array<boolean> = [true, false];
    const treeNames: Array<string> = ['tom', 'tomas', 'happy'];
    console.log('Array: ', list, children, answers, treeNames);

    let x: [string, number] = ['number', 1];
    x = ['story', 100];
    console.log('tuple: ', x[0].substring(2), x[1]);

    enum Color {
      Red = 'RED',
      Green = 300,
      White = 'WHITE'
    }
    const co: Color = Color.White;
    const cn: string = Color[300];
    console.log('enum: ', co, cn); // 枚举类型好爽，替代对象数组的查找映射。

    // eslint-disable-next-line
    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false;
    // eslint-disable-next-line
    const listAny: any[] = [1, true, '123'];
    listAny[1] = 123;
    console.log('any: ', notSure, listAny);

    (function warnUser(): void {
      console.log('void: ', 'this is a message!');
    })();

    const u: undefined = undefined;
    const n: null = null;
    console.log('undefined and null: ', u, n);

    const v: string | null | undefined = null;
    console.log('v: ', v);

    // function error (message: string): never {
    //   throw new Error(message);
    // }
    // function fail () {
    //   return error('some errors');
    // }
    // fail();

    function create(o: Record<string, unknown> | null): void {
      console.log('object: ', o);
    }
    create({
      prop: 100
    });
    create(null);
    create({});

    const someValue: any = 'this a number';
    const strLength: number = (someValue as string).length;
    const strLength2: number = (<string>someValue).length;
    console.log('assertions: ', strLength, strLength2);
  };
  (function () {
    basicTypes();
  })();
}
