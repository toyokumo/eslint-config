const toyokumoEsLint = require('./index.js');

module.exports = [
  ...toyokumoEsLint.configs.base,
  ...toyokumoEsLint.configs.js,
  ...toyokumoEsLint.configs.jest,
  {
    ignores: ['tests'],
  },
  ...toyokumoEsLint.configs.prettier,
];
