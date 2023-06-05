module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      plugins: ['tailwindcss'],
      extends: ['plugin:tailwindcss/recommended'],
    },
  ],
};
