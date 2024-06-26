module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/**',
          '**/tests/**',
          '**/__tests__/**',
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/jest.config.{js,ts}',
          '**/jest.setup.{js,ts}',
          '**/vite.*.config.{js,ts}',
          '**/vite.config.*.{js,ts}',
          '**/vite.config.{js,ts}',
          '**/tailwind.config.{js,ts}',
          '**/postcss.config.{js,ts}',
          '**/cypress.config.{js,ts}',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/eslint.config.{js,ts}',
          '**/.prettierrc.{js,cjs,mjs}',
          '**/prettier.config.{js,cjs,mjs}',
        ],
      },
    ],
    'import/no-relative-packages': 'error',
  },
};
