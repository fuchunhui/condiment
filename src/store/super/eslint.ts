// export const func = (value: number) => ({type: 'X', value});
// export const foo = () =>
//   ({
//     bar: true,
//   } as const);
// export const bar = () => 1;

// export const func = (value: number) => ({type: 'X', value} as const);
// export const foo = () =>
//   ({
//     bar: true,
//   } as const);
// export const bar = () => 1 as const;

// export const arrowFn = () => (): void => {};

// export function fn() {
//   return function (): void {};
// }


// export function foo(outer: string) {
//   return function (inner: string): void {};
// }

// export const arrowFn = () => (): void => {};

// export function fn() {
//   return function (): void {};
// }

// export function foo(outer: string) {
//   return function (inner: string): void {};
// }


// type FuncType = () => string;
// export const arrowFn: FuncType = () => 'test';

// export const funcExpr: FuncType = function () {
//   return 'test';
// };

// export const asTyped = (() => '') as () => string;
// export const castTyped = <() => string>(() => '');

// interface ObjectType {
//   foo(): number;
// }
// export const objectProp: ObjectType = {
//   foo: () => 1,
// };
// export const objectPropAs = {
//   foo: () => 1,
// } as ObjectType;
// export const objectPropCast = <ObjectType>{
//   foo: () => 1,
// };

// type FooType = (bar: string) => void;
// export const foo: FooType = bar => {};

// export const arrowFn = () => 'test';

// export const funcExpr = function () {
//   return 'test';
// };

// export const objectProp = {
//   foo: () => 1,
// };

// export const foo = bar => {};

// function test() {}

// const fn = () => {};

export default ():void => {};

const arrowFn = () => 'test';

// const funcExpr = function () {
//   return 'test';
// };

// const objectProp = {
//   foo: () => 1,
// };

// type FuncType = () => string;

// const arrowFn: FuncType = () => 'test';
console.log(arrowFn);