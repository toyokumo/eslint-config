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
        // The benefits of type inference for consistency outweigh the annotation of return type in special cases
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            vue: 'always',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};
