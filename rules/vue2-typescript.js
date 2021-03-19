module.exports = {
  overrides: [
    {
      files: '*.vue',
      plugins: ['vue', '@typescript-eslint'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/recommended', 'prettier'],
      rules: {
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+$' }],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            ts: 'never',
            vue: 'always',
          },
        ],
      },
    },
  ],
};
