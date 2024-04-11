const config = require('./config-helper.js');
const jsLint = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

module.exports = config({
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  extends: [
    jsLint.configs.recommended,
    {
      languageOptions: {
        parserOptions: {
          // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
          // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
          ecmaVersion: 'latest',
          sourceType: 'module',
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
        // This will do the trick (https://github.com/import-js/eslint-plugin-import/issues/2556)
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs'],
        },
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
    },
  ],
  rules: {
    ...importPlugin.configs.recommended.rules,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
    'arrow-body-style': 'error',
    'constructor-super': 'error',
  },
});
