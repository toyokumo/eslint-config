// for '@typescript-eslint/consistent-type-imports': 'error',
import { b, NumberArray } from '@/module';

const doSomething = (_: unknown) => undefined;

const a: NumberArray = [1, 2, 3];
doSomething(a);

// for '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
const f = (x: number, _: number) => x;

f(3, b);

// for '@typescript-eslint/array-type', 'error',
type SomeArray = Array<number>;

const arr: SomeArray = [1, 2, 3];
doSomething(arr);
