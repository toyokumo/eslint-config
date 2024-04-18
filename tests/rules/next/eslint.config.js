const toyokumoEsLint = require('../../../index.js');
const path = require('node:path');

module.exports = [
  ...toyokumoEsLint.configs.base,
  ...toyokumoEsLint.configs.tsx,
  ...toyokumoEsLint.configs.jest,
  ...toyokumoEsLint.config({
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...toyokumoEsLint.configs.ts,
      ...toyokumoEsLint.configs.react,
      ...toyokumoEsLint.configs.next,
      ...toyokumoEsLint.configs.tailwindcss,
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
          tailwindcss: {
            config: path.resolve(__dirname, 'tailwind.config.ts'),
          },
        },
      },
    ],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', path.resolve(__dirname, 'app')],
    },
  }),
];
