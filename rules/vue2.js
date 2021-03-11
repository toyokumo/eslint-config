module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  overrides: [
    {
      files: '*.vue',
      extends: ['plugin:vue/recommended', 'prettier'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+$' }],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            vue: 'never',
          },
        ],
      },
    },
  ],
};
