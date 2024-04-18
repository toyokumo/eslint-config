const config = require('./config-helper.js');
const importPlugin = require('eslint-plugin-import');
const importRule = require('./import.js');

module.exports = config({
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  extends: [
    {
      languageOptions: {
        parserOptions: {
          // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
          // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
          ecmaVersion: 'latest',
          sourceType: 'module',
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
    ...importRule.rules,
  },
});
