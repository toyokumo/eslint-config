module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            vue: 'always',
          },
        ],
      },
    },
  ],
};
