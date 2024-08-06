const config = require('./config-helper.js');
const tailwindcssLint = require('eslint-plugin-tailwindcss');

module.exports = config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [...tailwindcssLint.configs['flat/recommended']],
  rules: {
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
});
