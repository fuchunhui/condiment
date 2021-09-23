interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
declare function getSmallPet(): Fish | Bird;

declare function f1(arg: {
  a: number;
  b: number;
}): void;

declare function fmath<T extends boolean>(x: T): T extends true ? string : number;

declare function foor(x: string): number;
declare function foor(x: number): string;
declare function foor(x: string | number): string | boolean;
