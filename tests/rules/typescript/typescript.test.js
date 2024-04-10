const { loadESLint } = require('eslint');
const path = require('node:path');

test('ts', async () => {
  const FlatESLint = await loadESLint({ useFlatConfig: true });
  const eslint = new FlatESLint({ cwd: path.resolve(__dirname, 'tests/rules/typescript') });

  const results = await eslint.lintFiles(path.resolve(__dirname, 'sample.ts'));

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);

  // console.log(JSON.stringify(await eslint.calculateConfigForFile('./tests/rules/typescript/sample.ts'), null, 2));

  expect(results[0].errorCount).toBe(1);
  expect(results[0].messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'import/named',
      }),
    ]),
  );
});
