export default function (): void {
  console.log('utility types.');

  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
      ...todo,
      ...fieldsToUpdate
    };
  }

  const todo1: Todo = {
    title: 'organize desk',
    description: 'clear clutter'
  };

  const todo2: Todo = updateTodo(todo1, {
    description: 'throw out trash'
  });

  console.log({...todo1}, {...todo2});

  // Readonly<Type>
  interface ReadonlyTodo {
    title: string;
  }
  const readTodo: Readonly<ReadonlyTodo> = {
    title: 'readonly...'
  };
  console.log('readonly', {...readTodo});

  // Record
  interface PageInfo {
    title: string;
  }
  type Page = 'home' | 'about' | 'contact';
  const nav: Record<Page, PageInfo> = {
    about: {title: 'abhout'},
    contact: {title: 'contat'},
    home: {title: 'your home'}
  };
  console.log('Record: ', {...nav});
  // Pick
  interface PickTodo {
    title: string;
    description: string;
    completed: boolean;
  }
  type TodoPreview = Pick<PickTodo, 'title' | 'completed'>;
  const pick: TodoPreview = {
    title: 'jock',
    completed: false
  };
  console.log('Pick: ', {...pick});
  // Exclude
  type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
  type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
  type T2 = Exclude<string | number | (() => void), () => void>;
  const t2: T2 = 'string or number';
  const t1: T1 = 'c';
  const t0: T0 = 'b';
  console.log('Exclude: ', t0, t1, t2);

  // Extract
  type E0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
  type E1 = Extract<string | number | (() => void), () => void>;
  const e0: E0 = 'a';
  const e1: E1 = () => {
    console.log('Extract');
    return 1;
  };
  console.log('Extract: ', e0, e1());

  // Omit
  interface OmitTodo {
    title: string;
    description: string;
    completed: boolean;
  }
  type OmitPreview = Omit<OmitTodo, 'description'>;
  const omit: OmitPreview = {
    title: 'josrck',
    completed: true
  };
  console.log('Omit: ', {...omit});

  // NonNullable
  type N0 = NonNullable<string | number | undefined>;
  type N1 = NonNullable<string[] | null | undefined>;
  const n0: N0 = 'null';
  const n1: N1 = ['1', '2'];
  console.log('NonNullable: ', n0, n1);

  // Parameters
  type P0 = Parameters<() => string>;
  type P1 = Parameters<(s: string) => void>;
  type P2 = Parameters<<T>(arg: T) => T>;
  type P3 = Parameters<typeof f1>;
  type P4 = Parameters<any>; // eslint-disable-line
  type P5 = Parameters<never>;
  // type P6 = Parameters<string>;
  // type P7 = Parameters<Function>;
  const p0: P0 = [];
  const p1: P1 = ['a'];
  const p2: P2 = ['1'];
  const p3: P3 = [{a: 1, b: 2}];
  const p4: P4 = ['a', '2'];
  function p5(message: string): P5 {
    throw new Error(message);
  }
  console.log('Parameters: ', p0, p1, p2, p3, p4, p5);

  // ConstructorParameters
  type CP0 = ConstructorParameters<ErrorConstructor>;
  type CP1 = ConstructorParameters<FunctionConstructor>;
  type CP2 = ConstructorParameters<RegExpConstructor>;
  type CP3 = ConstructorParameters<any>;  // eslint-disable-line
  const cp0: CP0 = ['error'];
  const cp1: CP1 = ['a'];
  const cp2: CP2 = ['1'];
  const cp3: CP3 = [{a: 1, b: 2}];
  console.log('Parameters: ', cp0, cp1, cp2, cp3);

  // ReturnType
  type R0 = ReturnType<() => string>;
  type R1 = ReturnType<(s: string) => void>;
  type R2 = ReturnType<<T>() => T>;
  type R3 = ReturnType<<T extends U, U extends number[]>() => T>;
  type R4 = ReturnType<typeof f1>;
  type R5 = ReturnType<any>; // eslint-disable-line
  // type R6 = ReturnType<never>;
  const r0: R0 = 'abc';
  const r1 = function rt1(): R1 {
    console.log(r1);
  };
  const r2: R2 = false;
  const r3: R3 = [1, 2, 3];
  const r4 = function rt4(): R4 {
    console.log(r4);
  };
  function r5(message: string): R5 {
    throw new Error(message);
  }
  console.log('ReturnType: ', r0, r1, r2, r3, r4, r5);

  // InstanceType
  class ITC {
    x = 0;
    y = 0;
  }
  type IT0 = InstanceType<typeof ITC>;
  type IT1 = InstanceType<any>; // eslint-disable-line
  // type IT2 = InstanceType<never>;
  const it0: IT0 = {
    x: 0,
    y: 0
  };
  const it1: IT1 = {};
  console.log(it0, it1);

  interface Foo {
    type: 'foo'
  }
  interface Bar {
    type: 'bar'
  }
  interface Baz {
    type: 'baz'
  }
  type All = Foo | Bar | Baz;
  

  function handleValue(val: All) {
    switch (val.type) {
      case 'foo':
        // 这里 val 被收窄为 Foo
        break;
      case 'bar':
        // val 在这里是 Bar
        break;
      default:
        // val 在这里是 never
        // const exhaustiveCheck: never = val; // eslint-disable-line
        break;
    }
  }
  const foo: Foo = {
    type: 'foo'
  };
  console.log(handleValue(foo));

  // Required
  interface Props {
    a?: number; // eslint-disable-line
    b?: number; // eslint-disable-line
  }
  const d1: Props = {
    a: 5
  };
  const d2: Required<Props> = {
    a: 5,
    b: 123
  };
  console.log('Required: ', d1, d2);

  // ThisParameterType
  function toHex(this: number) {
    return this.toString(16);
  }
  function numberToString(n: ThisParameterType<typeof toHex>) { // eslint-disable-line
    return toHex.apply(n);
  }

  // OmitThisParameter
  const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
  console.log('OmitThisParameter: ', fiveToHex());

  // ThisType
  type ObjectDescription<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>;
  };
  function makeObject<D, M>(desc: ObjectDescription<D, M>): D & M {
    const data: {} = desc.data || {}; // eslint-disable-line
    const methods: {} = desc.methods || {}; // eslint-disable-line
    return {...data, ...methods} as D & M;
  }
  const obj = makeObject({
    data: {
      x: 0,
      y: 0
    },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
      }
    }
  });
  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);

  // Iterators and Generators
  const sa = [1, 'abc', false];
  for (const entry of sa) {
    console.log(entry);
  }
  for (const item in sa) {
    console.log(item, sa[item]);
  }

  const pets = new Set(['Cat', 'Dog', 'Hamster']);
  pets.add('Duck');
  console.log({...pets});
  for (const pet in pets) {
    console.log(pet); // 'species'
  }

  for (const pet of pets) {
    console.log(pet); // 'Cat', 'Dog', 'Hamster'
  }

  // Mixin
  class Sprite {
    name = '';
    x = 0;
    y = 0;

    constructor(name: string) {
      this.name = name;
    }
  }

  type Constructor = new (...args: any[]) => {}; // eslint-disable-line

  function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
      // Mixins may not declare private/protected properties
      // however, you can use ES2020 private fields
      _scale = 1;

      setScale(scale: number) {
        this._scale = scale;
      }

      get scale(): number {
        return this._scale;
      }
    };
  }

  const EightBitSprite = Scale(Sprite);
  const flappySprite = new EightBitSprite('Bird');
  flappySprite.setScale(2.1);
  console.log('flappySprite: ', flappySprite, flappySprite.scale);

  console.log('-------------------- Alternative Pattern');
  function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach(baseCtor => {
      console.log('constructors: ', {...baseCtor});
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        console.log('name: ', name);
        const baseName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
        if (!baseName) {
          return;
        }
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          baseName
        );
      });
    });
  }
  class Jumpable {
    jump() {
      console.log('something jump!');
    }
  }
  class Duckable {
    duck() {
      console.log('something duck kakka');
    }
  }
  class Sprition {
    x = 0;
    y = 0;
  }
  interface Sprition extends Jumpable, Duckable {}
  applyMixins(Sprition, [Jumpable, Duckable]);
  const player = new Sprition();
  player.jump();
  console.log('player: ', {...player}, player.x, player.y);
}
