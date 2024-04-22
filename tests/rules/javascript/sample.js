import { nothing } from './module.js';

const doSomething = (_) => undefined;

const name = 'eslint';

// for 'no-constant-condition': ["error", { "checkLoops": false }],
if (true) {
  console.log('constant condition warning');
}
// OK
while (false) {
  doSomething(10);
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

// for 'no-useless-constructor': 'error',
class B {
  constructor() {}
}
doSomething(new B());

// for 'no-useless-rename': 'error',
const a1 = { a2: 0 };
const { a2: a2 } = a1;
doSomething(a1, a2);

// for 'no-var': 'error',
var a3 = 1;
doSomething(a3);

// for 'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
const a4 = 13;
const a5 = { a4: a4 };
doSomething(a5);

// for 'prefer-arrow-callback': 'error',
const f1 = (f11) => f11();
f1(function () {
  return 10;
});

// for 'no-shadow': 'error',
let err = 'x';

try {
  doSomething(err);
} catch (err) {
  doSomething(err);
}

// for 'no-use-before-define': 'error',
f2();
function f2() {
  return 1;
}

// for 'camelcase': ['error', { properties: 'always' }],
const a_5 = 5;
doSomething(a_5);

const a6 = {
  a__6: 10,
};
doSomething(a6);

const { a6: a_6 } = { a6: 10 };
doSomething(a_6);

// for 'lines-between-class-members': 'error',
class MyClass {
  x;
  foo() {}
  bar() {}
}
doSomething(new MyClass());

// for 'lines-around-directive': 'error',
function f3() {
  'use strict';
  return 1;
}
f3();

// for 'no-array-constructor': 'error',
doSomething(Array());
doSomething(Array(0, 1, 2));

// for 'no-array-constructor': 'error',
const f4 = function (bar) {
  bar = 13;
  return bar;
};
doSomething(f4(5));
