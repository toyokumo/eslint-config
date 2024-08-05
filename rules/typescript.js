const config = require('./config-helper.js');
const importPlugin = require('eslint-plugin-import');
const importRule = require('./import.js');
const tsEslint = require('typescript-eslint');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');
const { fixupPluginRules } = require('@eslint/compat');

module.exports = config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [
    ...tsEslint.configs.strict,
    {
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaFeatures: { modules: true },
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: './tsconfig.json',
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      plugins: {
        import: fixupPluginRules(importPlugin),
      },
      settings: {
        // https://github.com/import-js/eslint-import-resolver-typescript#configuration
        'import/parsers': {
          // did the trick https://github.com/import-js/eslint-plugin-import/issues/2556
          // Enable to parse .js files written in ES module syntax.
          espree: ['.js', '.cjs', '.mjs'],
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
    },
  ],
  rules: {
    ...importPlugin.configs.recommended.rules,
    ...importRule.rules,
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
  },
});
