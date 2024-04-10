const { loadESLint } = require('eslint');
const path = require('node:path');

test('javascript', async () => {
  const FlatESLint = await loadESLint({ useFlatConfig: true });
  const eslint = new FlatESLint({ cwd: path.resolve(__dirname, 'tests/rules/javascript') });

  const results = await eslint.lintFiles(path.resolve(__dirname, 'sample.js'));

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);

  // console.log(JSON.stringify(await eslint.calculateConfigForFile('./rules/javascript.js'), null, 2));

  expect(results[0].messages).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        ruleId: 'import/named',
      }),
      expect.objectContaining({
        ruleId: 'no-unused-vars',
      }),
      expect.objectContaining({
        ruleId: 'no-constant-condition',
      }),
    ]),
  );
});
