# eslint-config
[![npm version](https://badge.fury.io/js/%40toyokumo%2Feslint-config.svg)](https://badge.fury.io/js/%40toyokumo%2Feslint-config)
![Test](https://github.com/toyokumo/eslint-config/workflows/Test/badge.svg?branch=main)

A ESLint rule set for Toyokumo.

# Purpose

- Standardization of coding style.
- Installation and setting support for ESLint.

# Based on [airbnb](https://github.com/airbnb/javascript)

- Additional settings are not overwritten, merge into eslint-config-airbnb-base.
- If we disagree with the rules of airbnb, we will not follow them.
- This policy might be changed.

## Differences

no-param-reassign rule is allowed for props.
```javascript
const xs = [{ a: 1 }, { a: 2 }];
// ok
xs.forEach((x) => { x.a = 0 });
```

no-unused-vars rule is allowed for strings matched `^_+$`.
```javascript
// ok
const f = (_, x) => x;
```

named export is recommended over default export.
```javascript
// bad
export default function foo() {}

// good
export function foo() {}
```

# Use prettier for code format

- All rules provided by toyokumo/eslint-config assume the use of prettier.
  - Install and use [@toyokumo/prettier-config](https://github.com/toyokumo/prettier-config)
- Use prettier-config-plugin to avoid lint errors where it overlaps with prettier format rules.
  - If we find a red squiggly line, we will want to fix it, but we don't have to manually fix what we can fix by formatting
- For the lint + format method, refer to the method of this repository.
- This policy might be changed.

# Supporting rule sets

- `@toyokumo/eslint-config`
  - Base rule set. At least use this.
- `@toyokumo/eslint-config/rules/typescript.js`
  - Support of typescript for `*.ts` files.
- `@toyokumo/eslint-config/rules/vue2.js`
  - Support of vue2 for `*.vue` files.
- `@toyokumo/eslint-config/rules/vue2-typescript.js`
  - Support of vue2 with typescript in script tag for `*.vue` files.
- `@toyokumo/eslint-config/rules/jest.js`
  - Support of jest.

# Usage

```bash
npm i --save-dev @toyokumo/eslint-config @toyokumo/prettier-config prettier npm-run-all
# or
yarn add --dev @toyokumo/eslint-config @toyokumo/prettier-config prettier npm-run-all
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
    "format-all": "npm run format \"./**/*.js\"",
    "format-all:eslint": "eslint --fix \"./**/*.js\"",
    "format-all:prettier": "prettier --write \"./**/*.js\""
  }
}
```

## Setup eslintrc

We just set the ideal rule set, so we can overwrite or ignore the rule depending on the project situation.

```javascript
module.exports = {
  extends: [
    '@toyokumo/eslint-config',
    '@toyokumo/eslint-config/rules/typescript.js',
    '@toyokumo/eslint-config/rules/vue2-typescript.js',
    '@toyokumo/eslint-config/rules/jest.js',
  ],
  // Add import/resolver suitable for project build tool.
  settings: {
    'import/resolver': {
      node: {
        // ...
      },
      webpack: {
        // ...
      }
    }
  },
  rules: {
    // too many default export in project.
    'import/no-default-export': 'off',
  },
  overrides: [
    {
      files: '*.ts',
      rules: {
        // too many any in project.
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: '*.vue',
      rules: {
        // too many any in project.
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
```
