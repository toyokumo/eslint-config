const config = require('./config-helper.js');
const { FlatCompat } = require('@eslint/eslintrc');
const { fixupPluginRules } = require('@eslint/compat');

const compat = new FlatCompat();

module.exports = config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [...fixupPluginRules(compat.extends('plugin:tailwindcss/recommended'))],
  rules: {
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
});
