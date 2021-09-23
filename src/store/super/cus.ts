export default function (): void {
  console.log('custom');

  interface Base1 {
    run: (options: { message?: string }) => void;
  }
  interface Box1 extends Base1 { // eslint-disable-line
    run2(options: { message: string }): void;
  }

  interface Base2 {
    run(options: { message?: string }): void;
  }
  interface Box2 extends Base2 { // eslint-disable-line
    run(options: { message: string }): void;
  }
}
