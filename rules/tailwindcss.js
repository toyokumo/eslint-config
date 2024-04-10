const config = require('./config-helper.js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [...compat.extends('plugin:tailwindcss/recommended')],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
});
