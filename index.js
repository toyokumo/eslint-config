const baseLint = require('./rules/base');
const javascriptLint = require('./rules/javascript');
const jestLint = require('./rules/jest');
const tsLint = require('./rules/typescript');
const tsxLint = require('./rules/typescript-jsx');
const reactLint = require('./rules/react');
const nextLint = require('./rules/next');
const tailwindCssLint = require('./rules/tailwindcss');
const prettierLint = require('./rules/prettier');
const config = require('./rules/config-helper');

module.exports = {
  config,
  configs: {
    base: baseLint,
    js: javascriptLint,
    jest: jestLint,
    ts: tsLint,
    tsx: tsxLint,
    react: reactLint,
    next: nextLint,
    tailwindcss: tailwindCssLint,
    prettier: prettierLint,
  },
};
