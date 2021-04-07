module.exports = {
  overrides: [
    {
      files: '*.vue',
      parser: 'vue-eslint-parser',
      plugins: ['vue'],
      extends: ['plugin:vue/recommended', 'prettier'],
      rules: {
        'import/no-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            ts: 'never',
            vue: 'never',
          },
        ],
      },
    },
    {
      files: '*.js',
      rules: {
        // for vuex
        'no-shadow': ['error', { allow: ['state', 'getters'] }],
      },
    },
    {
      files: '*.ts',
      rules: {
        // for vuex
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error', { allow: ['state', 'getters'] }],
      },
    },
  ],
};
