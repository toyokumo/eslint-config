module.exports = {
  overrides: [
    {
      files: '*.ts',
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+$' }],
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
