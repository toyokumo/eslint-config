const nextPlugin = require('@next/eslint-plugin-next');

/*
 this rule depends on rules for typescript and react.

 Usage Example:

```
 import toyokumoEslint from '@toyokumo/eslint-config';

 export default = [
   ...toyokumoEslint.config({
     files: ['** / *.ts', '** / *.tsx'],
     extends: [
       ...toyokumoEslint.configs.ts,
       toyokumoEslint.configs.react,
       toyokumoEslint.configs.next,
     ],
     rules: {
       ...myRules,
     },
   })
 ]
```

 */

module.exports = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
};
