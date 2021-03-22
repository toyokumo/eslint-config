module.exports = {
  overrides: [
    {
      files: '*.vue',
      parser: 'vue-eslint-parser',
      plugins: ['vue'],
      extends: ['plugin:vue/recommended', 'prettier'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+$' }],
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
      files: ['*.js', '*.ts'],
      rules: {
        // for vuex
        'no-shadow': ['error', { allow: ['state', 'getters'] }],
      },
    },
  ],
};
