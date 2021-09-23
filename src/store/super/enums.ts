export default function (): void {
  console.log('enums');

  enum Direction {
    Up,
    Down,
    Left,
    Right
  }

  console.log('enums: ', {...Direction}, Direction[2], Direction.Down);

  enum Response {
    No = 0,
    Yes = 1
  }
  function respond(recipient: string, message: Response): void {
    console.log(Number(recipient) + message);
  }
  respond('Princess Caroline ', Response.Yes);

  enum Streat {
    Up = 'UUP',
    Down = 'DDOWN',
    Left = 'LLEFT',
    Right = 'RRIGHT'
  }

  console.log('enums: ', {...Streat}, Streat.Down);

  enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = '123'.length
  }
  console.log('enums: ', {...FileAccess}, FileAccess.Write);

  enum ShapeKind {
    Circle,
    Square
  }
  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }
  interface Square {
    kind: ShapeKind.Square;
    length: number;
  }
  const c: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
  };
  const s: Square = {
    kind: ShapeKind.Square,
    length: 100
  };
  console.log({...ShapeKind}, c, s);

  enum E {
    X,
    Y,
    TES
  }

  function f(obj: { X: number }): number {
    return obj.X;
  }
  console.log(f(E));

  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
  }

  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  function print(key: LogLevelStrings, msg: string): void {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log('Log: ', key, num, msg);
    }
  }
  print('ERROR', 'mmmm');

  const enum Letter {
    A = 18,
    B = A * 4
  }
  const num = [
    Letter.A,
    Letter.B
  ];
  console.log('enum: ', num);
}
