const javascriptLint = require('./rules/javascript');
const jestLint = require('./rules/jest');

module.exports = {
  configs: {
    js: javascriptLint,
    jest: jestLint,
  },
};
