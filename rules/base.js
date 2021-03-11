const airbnbRulesVars = require('eslint-config-airbnb-base/rules/variables');

function noUnusedVars(rule) {
  const [error, options] = rule;
  return [
    error,
    {
      ...options,
      argsIgnorePattern: '^_+$',
    },
  ];
}

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    // Allow following code
    // xs.forEach((x) => { x.a = 0 })
    'no-param-reassign': ['error', { props: false }],
    // Allow following code
    // (_, x) => x
    'no-unused-vars': noUnusedVars(airbnbRulesVars.rules['no-unused-vars']),
  },
};
