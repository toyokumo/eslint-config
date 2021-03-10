# eslint-config

A ESLint rule set for Toyokumo.

# Purpose

- Standardization of coding style.
- Installation and setting support for ESLint.

# Based on [airbnb](https://github.com/airbnb/javascript)

- Additional settings are not overwritten, merge into eslint-config-airbnb-base.
- We don't agree with the airbnb rule, we don't follow it.
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

# Use prettier for code format

- All rules provided by toyokumo/eslint-config assume the use of prettier.
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

We just set the ideal rule set, so we can overwrite or ignore the rule depending on the project situation.

```javascript
module.exports = {
  extends: [
    '@toyokumo/eslint-config',
    '@toyokumo/eslint-config/rules/typescript.js',
    '@toyokumo/eslint-config/rules/vue2-typescript.js',
    '@toyokumo/eslint-config/rules/jest.js',
  ],
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
