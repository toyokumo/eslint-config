const path = require('path');
const { lintFilesWithConfigFile } = require('../support/eslint');

const config = path.resolve(__dirname, 'config.js');
const good = path.resolve(__dirname, 'good.js');
const bad = path.resolve(__dirname, 'bad.js');

test('base', async () => {
  const lintResult = await lintFilesWithConfigFile(config, [good, bad]);

  expect(lintResult[0].errorCount).toBe(0);
  expect(lintResult[0].warningCount).toBe(0);

  expect(lintResult[1].warningCount).toBe(1);
});
