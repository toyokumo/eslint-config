const path = require('path');
const { lintFilesWithConfigFile } = require('../support/eslint');

const config = path.resolve(__dirname, 'config.js');
const good = path.resolve(__dirname, 'good.ts');

test('vue2-typescript', async () => {
  const lintResult = await lintFilesWithConfigFile(config, [good]);

  expect(lintResult[0].errorCount).toBe(0);
  expect(lintResult[0].warningCount).toBe(0);
});
