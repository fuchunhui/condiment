export default function (): void {
  console.log('classes!');

  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return `hellow, ${this.greeting}`;
    }
  }

  const greeter = new Greeter('music');
  console.log('classes: ', greeter);

  class Animal {
    move(distance: number = 0) {
      console.log(`animal moved ${distance}m.`);
    }
  }
  class Dog extends Animal {
    break() {
      console.log('woof!');
    }
  }
  const dog = new Dog();
  dog.break();
  dog.move();
  dog.break();

  class AnimalHigh {
    public name: string;
    public constructor(name: string) {
      this.name = name;
    }

    public move(distance: number = 0): void {
      console.log(`${this.name} moved ${distance}m.`, this);
    }
  }
  class Snake extends AnimalHigh {
    move(distance = 5) {
      console.log('slithering...');
      super.move(distance);
    }
  }

  class Horse extends AnimalHigh {
    constructor(name: string) {
      super(name);
      this.name = name + ' 123';
    }

    move(distance = 45) {
      console.log('galloping...');
      super.move(distance);
    }
  }

  const sam = new Snake('SamSnake');
  const tom = new Horse('TomHorse');
  sam.move();
  tom.move(34);

  class AnimalPP {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  const pp = new AnimalPP('Cat');
  console.log('ECMAScript Private Fields: ', pp);

  class Rhino extends AnimalPP {
    constructor() {
      super('Rhino');
    }
  }

  let animal = new AnimalPP('Goat');
  const rhino = new Rhino();
  animal = rhino;
  console.log(animal);

  class Person {
    protected name: string;
    protected constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    public department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
  }

  const howard = new Employee('Howard', 'Sales');
  console.log(howard.getElevatorPitch());
  console.log('protected: ', howard.department);

  class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
      console.log(name);
    }
  }
  const dad = new Octopus('eight legs');
  // dad.name = 'more';
  console.log('Readonly: ', dad);

  // class Employee2 {
  //   fullName: string = 't';
  // }

  const fullNameMaxLength = 10;
  class Employee3 {
    private _fullName: string = '';
    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (newName && newName.length > fullNameMaxLength) {
        throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
      }
      this._fullName = newName;
    }
  }
  const emp = new Employee3();
  emp.fullName = 'Bob Smith';
  if (emp.fullName) {
    console.log('Accessors', emp.fullName);
  }

  class Grid {
    static origin = {
      x: 0,
      y: 0
    };

    constructor(public scale: number = 1) {
      console.log('Static Properties', scale);
    }

    calculateDistanceFromOrigin(point: {
      x: number;
      y: number;
    }) {
      const xD = point.x - Grid.origin.x;
      const yD = point.y - Grid.origin.y;
      return Math.sqrt(xD * xD + yD * yD) / this.scale;
    }
  }
  const g1 = new Grid(10);
  const g2 = new Grid(25);
  console.log(g1.calculateDistanceFromOrigin({
    x: 10,
    y: 10
  }));
  console.log(g2.calculateDistanceFromOrigin({
    x: 10,
    y: 10
  }));

  // abstract class Animal4 {
  //   abstract makeSound(): void;
  //   move (): void {
  //     console.log('roaming the earth...');
  //   }
  // }

  abstract class Department3 {
    constructor(public name: string) {
      console.log('abstract classes ', name);
    }

    printName(): void {
      console.log('Department name: ' + this.name);
    }

    abstract printMeeting (): void;
  }
  class AccountingDepartment extends Department3 {
    constructor() {
      super('Accounting');
    }

    printMeeting(): void {
      console.log('abstract printmeeting.');
    }

    generateReports(): void {
      console.log('Generating...');
    }
  }

  const depart: Department3 = new AccountingDepartment();
  depart.printName();
  depart.printMeeting();
  // depart.generateReports();

  class Greeter3 {
    greeting: string;
    constructor(mes: string) {
      this.greeting = mes;
    }

    greet() {
      return 'hellow' + this.greeting;
    }
  }
  const greet: Greeter3 = new Greeter3('1234dasd');
  console.log(greet.greet());

  class Greeter4 {
    static standardGreeting = 'Hello, there';
    greeting: string = '';
    greet() {
      if (this.greeting) {
        return 'Hello, ' + this.greeting;
      } else {
        return Greeter4.standardGreeting;
      }
    }
  }

  const greeter1: Greeter4 = new Greeter4();
  console.log(greeter1.greet()); // 'Hello, there'
  const greeterMaker: typeof Greeter4 = Greeter4;
  greeterMaker.standardGreeting = 'Hey there!';
  const greeter2: Greeter4 = new greeterMaker(); //eslint-disable-line
  console.log('Constructor functions: ', greeter2.greet()); // 'Hey there!'

  class Point5 {
    x: number = 0;
    y: number = 2;
  }
  interface Point3d extends Point5 {
    z: number;
  }
  const point4: Point3d = {
    x: 1,
    y: 2,
    z: 3
  };
  console.log('using a class an interface', point4);
}
