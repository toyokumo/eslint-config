const toyokumoEsLint = require('./index.js');

module.exports = [
  ...toyokumoEsLint.configs.js,
  ...toyokumoEsLint.configs.jest,
  {
    ignores: ['tests'],
  },
  toyokumoEsLint.configs.prettier,
];
