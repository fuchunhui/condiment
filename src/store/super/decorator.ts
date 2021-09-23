import 'reflect-metadata';

const formatMetadataKey = Symbol('format');
console.log('formatMetadataKey: ', formatMetadataKey);

export default function (): void {
  console.log('decorator.');

  // Decorator
  // Class Decorator & Method Decorator
  function sealed(constructor: Function) { // eslint-disable-line
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  const enumerable = (value: boolean) => {
    console.log('enumerable method.');
    return function (
      target: any, // eslint-disable-line
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      descriptor.enumerable = value;
      console.log(target, propertyKey, descriptor);
    };
  };

  const format = (formatString: string) => {
    return Reflect.metadata(formatMetadataKey, formatString);
  };

  const getFormat = (target: any, propertyKey: string) => { // eslint-disable-line
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  };

  @sealed
  class Greeter {
    @format('hello, %s')
    greeting: string;

    constructor(message: string) {
      this.greeting = message;
    }

    @enumerable(true)
    greet() {
      const formatString = getFormat(this, 'greeting');
      console.log('formatString: ', formatString);
      return formatString.replace('%s', this.greeting);
      // return `Hello, ${this.greeting}`;
    }
  }

  const greet = new Greeter('ts.');
  console.log(greet, greet.greet());

  function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T) { // eslint-disable-line
    console.log('classDecorator');
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
  }

  @classDecorator
  class Greeter2 {
    property = 'property';
    hello: string = 'hello';
    constructor(m: string) {
      this.hello = m;
    }
  }

  const greet2 = new Greeter2('ts.');
  console.log(greet2);

  // Accessor Decorators
  const configurable = (value: boolean) => {
    console.log('accessor decorators.');
    return (
      target: any, // eslint-disable-line 
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      descriptor.configurable = value;
      console.log(target, propertyKey, descriptor);
    };
  };
  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    @configurable(false)
    get x() {
      return this._x;
    }

    @configurable(false)
    get y() {
      return this._y;
    }
  }

  const point = new Point(100, 200);
  console.log('point: ', point);

  class Line {
    private _p0: Point;
    private _p1: Point;

    constructor(p0: Point, p1: Point) {
      this._p0 = p0;
      this._p1 = p1;
    }

    @Reflect.metadata('design:type', Point)
    set p0(value: Point) {
      this._p0 = value;
    }

    get p0() {
      return this._p0;
    }

    @Reflect.metadata('design:type', Point)
    set p1(value: Point) {
      this._p1 = value;
    }

    get p1() {
      return this._p1;
    }
  }
  const line = new Line(new Point(100, 100), new Point(20, 30));
  console.log('line: ', line);
  line.p0 = new Point(40, 40);
  console.log('line: ', line);
}
