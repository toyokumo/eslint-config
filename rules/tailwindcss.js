module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['tailwindcss'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:tailwindcss/recommended'],
    },
  ],
};
