const path = require('path');
const { lintFilesWithConfigFile } = require('../support/eslint');

const config = path.resolve(__dirname, 'config.js');
const goodTs = path.resolve(__dirname, 'good.ts');
const goodTsx = path.resolve(__dirname, 'good.tsx');

test('typescript', async () => {
  const lintResult = await lintFilesWithConfigFile(config, [goodTs, goodTsx]);

  // console.log(JSON.stringify(lintResult, null, 2))

  expect(lintResult[0].errorCount).toBe(0);
  expect(lintResult[0].warningCount).toBe(0);
});
