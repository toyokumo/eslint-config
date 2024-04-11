import { nothing } from './module.js';

const doSomething = (_) => undefined;

const name = 'eslint';

if (true) {
  console.log('constant condition warning');
}

// for 'no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
const f = (x, _) => x;
f(1, 2);

// for 'arrow-body-style': 'error',
const g = () => {
  return 10;
};
g();

// for 'constructor-super': 'error',
class A extends null {
  constructor() {}
}
doSomething(new A());

// for 'no-restricted-exports': ['error', { restrictedNamedExports: ['default', 'then'] }],
export { a as default } from './module.js';
export { b as then } from './module.js';
