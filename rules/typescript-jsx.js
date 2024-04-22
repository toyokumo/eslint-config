module.exports = [
  {
    files: ['**/*.tsx'],
    rules: {
      'import/prefer-default-export': ['warn', { target: 'any' }],
    },
  },
];
