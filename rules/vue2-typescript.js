module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: '*.vue',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier/@typescript-eslint',
        'prettier/vue',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_+$' },
        ],
        'import/extensions': ['error', 'ignorePackages', {
          ts: 'never',
          vue: 'always',
        }],
      },
    },
  ],
}
