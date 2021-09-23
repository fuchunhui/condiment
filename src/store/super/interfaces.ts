export default function interfaces(): void {
  function printLabel(labeledObj: { label: string }): void {
    console.log(labeledObj.label);
  }
  const myObj = {
    size: 10,
    label: 'Size 10 Object'
  };
  printLabel(myObj);

  interface LabeledValue {
    label: string;
  }
  function printLabel2(labeledObj: LabeledValue): void {
    console.log('printLabel2: ', labeledObj.label);
  }
  printLabel2(myObj);

  const d: Date = new Date();
  console.log(d.toDateString());
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; 
  }
  function createSquare(config: SquareConfig): SquareConfig {
    const newSquare = {
      color: 'white',
      area: 100
    };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
  }
  const mySquare = createSquare({
    color: 'black'
  });
  console.log('optional properties: ', {...mySquare});
  const testSquare = createSquare({
    width: 1000,
    opacity: 0.5
  } as SquareConfig);
  console.log('testSquare: ', {...testSquare});
  const propSquare = createSquare({
    // width: 10,
    size: 100
  });
  console.log('propSquare: ', {...propSquare});

  // variables use const whereas properties use readonly
  interface Point {
    readonly x: number;
    y: number;
  }
  const point: Point = {
    x: 10,
    y: 20
  };
  point.y = 100;
  console.log('readonly properties: ', {...point});

  let a: number[] = [1, 2, 3, 4];
  const ro: ReadonlyArray<number> = a;
  console.log('ro: ', {...ro});
  a = ro as number[];

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  const mySearch: SearchFunc = function (src: string, sub: string): boolean {
    const result = src.search(sub);
    return result > 1;
  };
  console.log(mySearch('abcdefg ggjj ite', 'gg'));
  const uSearch: SearchFunc = function (scr, sub) {
    const result = scr.search(sub);
    return result > 1;
  };
  console.log('function types: ', uSearch('abcdefg ggjj ite', 'gg'));

  interface StringArray {
    [index: number]: string;
  }
  const myArray: StringArray = ['Bob', 'Fred'];
  const myStr: string = myArray[1];
  console.log('indexable types: ', myStr);

  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    bread: string;
  }
  interface NotOkay {
    [x: number]: Animal;
    // [x: string]: Dog;
  }
  interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: number;
  }
  const dog: Dog = {
    name: 'Shar Pei',
    bread: 'wang wang wang'
  };
  const zebra: NotOkay = [
    {
      name: 'zebra'
    }
  ];
  const moneky: NotOkay = {
    5: {
      name: 'moneky'
    }
  };
  const nd: NumberDictionary = {
    'a': 13,
    length: 33,
    name: 250
  };

  console.log(`------------------> ${dog.name} say : ${dog.bread}`, zebra, moneky, nd);
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  const readArray: ReadonlyStringArray = ['Array', 'Bob'];
  console.log('indexable types: ', {...readArray});

  interface ClockInterface {
    currentTime: Date;
  }
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {
      console.log(h, m);
      this.currentTime = new Date(2000, 1, 1, h, m, 11);
    }
  }
  const myClock = new Clock(11, 6);
  console.log('Class Types: ', {...myClock});

  interface TimeClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
  class TimeClock implements TimeClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }

    constructor(h: number, m: number) {
      console.log(h, m);
    }
  }
  const timeClock = new TimeClock(11, 49);
  timeClock.setTime(new Date(2008, 12, 12, 12, 12, 11));
  console.log('class types: ', {...timeClock});

  interface ClockTick {
    tick(): void;
  }
  interface ClockConstructor {
    new (hour: number, minute: number): ClockTick;
  }
  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockTick {
    return new ctor(hour, minute); // eslint-disable-line
  }
  class DigitalClock implements ClockTick {
    constructor(h: number, m: number) {
      console.log('DigitalClock: ', h, m);
    }

    tick() {
      console.log('beep beep');
    }
  }
  class AnalogClock implements ClockTick {
    constructor(h: number, m: number) {
      console.log('AnalogClock: ', h, m);
    }

    tick() {
      console.log('tick tick');
    }
  }
  const digital = createClock(DigitalClock, 12, 17);
  const analog = createClock(AnalogClock, 8, 32);
  digital.tick();
  analog.tick();
  console.log('different between the static and instance sides of classes', digital, analog);

  interface Clock2 {
    new (hour: number, minute: number): any; // eslint-disable-line
  }
  interface ClockTick2 {
    tick(): void;
  }
  const ClockT: Clock2 = class ClockT implements ClockTick2 {
    constructor(h: number, m: number) {
      console.log('ClockT: ', h, m);
    }

    tick() {
      console.log('lll 111');
    }
  };
  console.log('class expressions: ', ClockT);

  interface Shape {
    color: string;
  }
  interface Scense {
    name: string;
  }
  interface Rect extends Shape, Scense {
    widht: number;
    height: number;
  }
  const area = {} as Rect;
  area.color = 'red';
  area.widht = 200;
  area.name = 'School';
  console.log('extends interface: ', area);

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }
  function getCounter(): Counter {
    const counter = function (start: number) {
      console.log('counter start: ', start);
    } as Counter;
    counter.interval = 12345;
    counter.reset = () => {
      console.log('reset!!!!');
    };
    return counter;
  }
  const c = getCounter();
  c(100);
  c.reset();
  c.interval = 5.5;
  console.log('hybrid types: ', c);

  class Control {
    protected state: string = '123';
  }
  interface SelectableControl extends Control {
    select(): number;
  }
  class Button extends Control implements SelectableControl {
    state: string = 'name1';
    select(): number {
      return 123456;
    }
  }
  class TextBox extends Control {
    state: string = '111';
    select(): number {
      return 1;
    }
  }
  const btn: Button = new Button();
  const tb = new TextBox();
  console.log('interfaces extending classes: ', btn.state, btn.select(), tb.select());
}
