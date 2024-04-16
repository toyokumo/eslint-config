const reactPlugin = require('eslint-plugin-react');
const reactRecommended = require('eslint-plugin-react/configs/recommended.js');
const hooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

/*
 this rule depends on rules for typescript.

 Usage Example:

```
 import toyokumoEslint from '@toyokumo/eslint-config';

 export default = [
   ...toyokumoEslint.config({
     files: ['** / *.ts', '** / *.tsx'],
     extends: [
       ...toyokumoEslint.configs.ts,
       ...toyokumoEslint.configs.react,
     ],
     rules: {
       ...myRules,
     },
   })
 ]
```

 */

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRecommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/function-component-definition': 'error',
      'import/prefer-default-export': 'warn',
    },
  },
];
