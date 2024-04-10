const toyokumoEsLint = require('../../../index.js');
const path = require('node:path');

module.exports = [
  ...toyokumoEsLint.config({
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...toyokumoEsLint.configs.ts,
      toyokumoEsLint.configs.react,
      toyokumoEsLint.configs.next,
      {
        languageOptions: {
          parserOptions: {
            project: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        settings: {
          'import/resolver': {
            typescript: {
              project: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        },
      },
    ],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', path.resolve(__dirname, 'app')],
    },
  }),
];
