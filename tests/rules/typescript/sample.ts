import { b } from '@/module';

const f = (x: number, _: number) => {
  return x;
};

f(3, b);

type SomeArray = Array<number>;

const arr: SomeArray = [1, 2, 3];
arr.push(4);
