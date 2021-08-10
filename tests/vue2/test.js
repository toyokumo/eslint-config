const path = require('path');
const { lintFilesWithConfigFile } = require('../support/eslint');

const config = path.resolve(__dirname, 'config.js');
const goodJs = path.resolve(__dirname, 'good.js');
const goodVue = path.resolve(__dirname, 'good.vue');

test('vue2', async () => {
  const lintResult = await lintFilesWithConfigFile(config, [goodJs, goodVue]);

  expect(lintResult[0].errorCount).toBe(0);
  expect(lintResult[0].warningCount).toBe(0);
  expect(lintResult[1].errorCount).toBe(0);
  expect(lintResult[1].warningCount).toBe(0);
});
