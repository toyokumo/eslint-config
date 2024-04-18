const config = require('./config-helper.js');
const importPlugin = require('eslint-plugin-import');
const importRule = require('./import.js');
const tsEslint = require('typescript-eslint');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [
    ...tsEslint.configs.recommended,
    {
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaFeatures: { modules: true },
          ecmaVersion: 'latest',
          project: './tsconfig.json',
        },
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      plugins: {
        import: importPlugin,
      },
      settings: {
        // https://github.com/import-js/eslint-import-resolver-typescript#configuration
        'import/parsers': {
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
