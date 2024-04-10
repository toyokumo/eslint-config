const javascriptLint = require('./rules/javascript');
const jestLint = require('./rules/jest');
const tsLint = require('./rules/typescript');
const reactLint = require('./rules/react');
const config = require('./rules/config-helper');

module.exports = {
  config,
  configs: {
    js: javascriptLint,
    jest: jestLint,
    ts: tsLint,
    react: reactLint,
  },
};
