# eslint-config

[![npm version](https://badge.fury.io/js/%40toyokumo%2Feslint-config.svg)](https://badge.fury.io/js/%40toyokumo%2Feslint-config)
![Test](https://github.com/toyokumo/eslint-config/workflows/Test/badge.svg?branch=main)

A ESLint rule set for Toyokumo.

# Purpose

- Standardization of coding style.
- Installation and setting support for ESLint.

# Use prettier for code format

- All rules provided by toyokumo/eslint-config assume the use of prettier.
  - Install and use [@toyokumo/prettier-config](https://github.com/toyokumo/prettier-config)
- Use prettier-config-plugin to avoid lint errors where it overlaps with prettier format rules.
  - If we find a red squiggly line, we will want to fix it, but we don't have to manually fix what we can fix by formatting
- For the lint + format method, refer to the method of this repository.
- This policy might be changed.

# Usage

```bash
npm i --save-dev @toyokumo/eslint-config eslint @toyokumo/prettier-config prettier npm-run-all
# or
yarn add --dev @toyokumo/eslint-config eslint @toyokumo/prettier-config prettier npm-run-all
```

## Setup npm scripts

We **must use prettier** for code format when using @toyokumo/eslint-config.

We are taking this strategy for code format - `eslint --fix` -> `prettier --write`

An Example of npm scripts to achieve this strategy.

```json
{
  "scripts": {
    "format": "run-s \"format:eslint -- {1}\" \"format:prettier -- {1}\" --",
    "format:eslint": "eslint --fix",
    "format:prettier": "prettier --write",
    "format-all": "npm run format \"./**/*.{js,ts,tsx}\"",
    "format-all:eslint": "eslint --fix \"./**/*.{js,ts,tsx}\"",
    "format-all:prettier": "prettier --write \"./**/*.{js,ts,tsx}\""
  }
}
```

## Configuration object

```javascript
const toyokumoEslint = require('@toyokumo/eslint-config');
/* 
Imported toyokumoEslint is a object of ESLint configurations.

{
  // config is a config helper function inspired by typescript-eslint.
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/typescript-eslint/src/config-helper.ts
  config,
  // configs is a object of ESLint configurations.
  configs: {
    base, // Linter.FlatConfig[]
    js, // Linter.FlatConfig[]
    ts, // Linter.FlatConfig[]
    tsx, // Linter.FlatConfig[]
    react, // Linter.FlatConfig[]
    next, // Linter.FlatConfig[]
    tailwindcss, // Linter.FlatConfig[]
    jest, // Linter.FlatConfig[]
    prettier, // Linter.FlatConfig[]
  },
}

 */
```

## Setup eslint.config.js

We just set the ideal rule set, so we can overwrite or ignore the rule depending on the project situation.

```javascript
// Most simple example
const toyokumoEslint = require('@toyokumo/eslint-config');

module.exports = [
  ...toyokumoEslint.configs.base,
  ...toyokumoEsLint.configs.js,
  ...toyokumoEsLint.configs.ts,
  ...toyokumoEsLint.configs.tsx,
  ...toyokumoEsLint.configs.react,
  ...toyokumoEsLint.configs.next,
  ...toyokumoEsLint.configs.tailwindcss,
  ...toyokumoEsLint.configs.prettier,
  {
    rules: {
      // Overwrite my rule
    }
  },
];

// Multi modules
module.exports = [
  ...toyokumoEslint.configs.base,
  ...toyokumoEsLint.configs.tsx, // *.tsx only.
  ...toyokumoEslint.config({
    files: ['packages/next/**/*.ts', 'packages/next/**/*.tsx'],
    extends: [
      ...toyokumoEsLint.configs.ts,
      ...toyokumoEsLint.configs.react,
      ...toyokumoEsLint.configs.next,
      ...toyokumoEsLint.configs.tailwindcss,
      {
        languageOptions: {
          parserOptions: {
            project: 'packages/next/tsconfig.json',
          },
        },
        settings: {
          'import/resolver': {
            typescript: {
              project: 'packages/next/tsconfig.json',
            },
          },
          tailwindcss: {
            config: 'packages/next/tailwind.config.ts',
          },
        },
      }
    ],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'packages/next/app'],
      // Overwrite my rule
    }
  }),
  ...toyokumoEslint.config({
    files: ['packages/ui-component/**/*.ts', 'packages/ui-component/**/*.tsx'],
    extends: [
      ...toyokumoEsLint.configs.ts,
      ...toyokumoEsLint.configs.react,
      ...toyokumoEsLint.configs.tailwindcss,
      {
        languageOptions: {
          parserOptions: {
            project: 'packages/ui-component/tsconfig.json',
          },
        },
        settings: {
          'import/resolver': {
            typescript: {
              project: 'packages/ui-component/tsconfig.json',
            },
          },
          tailwindcss: {
            config: 'packages/ui-component/tailwind.config.ts',
          },
        },
      }
    ],
    rules: {
      // Overwrite my rule
    }
  }),
  ...toyokumoEsLint.configs.prettier,
];
```