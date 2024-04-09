const toyokumoEsLint = require('./index.js');
const globals = require('globals');

module.exports = [
  ...toyokumoEsLint.configs.js,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    ignores: ['tests/**/good.js', 'tests/**/bad.js']
  },
];
