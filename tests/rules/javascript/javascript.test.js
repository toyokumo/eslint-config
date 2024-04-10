const { loadESLint } = require('eslint');
const path = require('node:path');

const testCode = `
  const name = "eslint";
  if(true) {
    console.log("constant condition warning")
  };

  const f = (x, _) => x;
  f(1, 2);
`;

test('javascript', async () => {
  const FlatESLint = await loadESLint({ useFlatConfig: true });
  const eslint = new FlatESLint({ cwd: path.resolve(__dirname, 'tests/rules/javascript') });

  const results = await eslint.lintText(testCode);

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);

  // console.log(JSON.stringify(await eslint.calculateConfigForFile('./rules/javascript.js'), null, 2));

  expect(results[0].errorCount).toBe(2);
  expect(results[0].messages[0].ruleId).toBe('no-unused-vars');
  expect(results[0].messages[1].ruleId).toBe('no-constant-condition');
});
