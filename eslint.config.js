const toyokumoEsLint = require('./index.js');

module.exports = [
  ...toyokumoEsLint.configs.js,
  ...toyokumoEsLint.configs.jest,
  {
    ignores: ['tests/**/sample.{js, ts, tsx}'],
  },
];
