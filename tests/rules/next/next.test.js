const { loadESLint } = require('eslint');
const path = require('node:path');

test('page.tsx', async () => {
  const FlatESLint = await loadESLint({ useFlatConfig: true });
  const eslint = new FlatESLint({ cwd: path.resolve(__dirname, 'tests/rules/next') });

  const results = await eslint.lintFiles(path.resolve(__dirname, 'app/page.tsx'));

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);

  // console.log(JSON.stringify(await eslint.calculateConfigForFile('./tests/rules/next/app/layout.tsx'), null, 2));

  expect(results[0].messages).toEqual(expect.arrayContaining([]));
});
