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
      expect.objectContaining({
        ruleId: 'arrow-body-style',
      }),
      expect.objectContaining({
        ruleId: 'constructor-super',
      }),
      expect.objectContaining({
        ruleId: 'no-restricted-exports',
        message: "'default' is restricted from being used as an exported name.",
      }),
      expect.objectContaining({
        ruleId: 'no-restricted-exports',
        message: "'then' is restricted from being used as an exported name.",
      }),
      expect.objectContaining({
        ruleId: 'no-useless-constructor',
      }),
      expect.objectContaining({
        ruleId: 'no-useless-rename',
      }),
      expect.objectContaining({
        ruleId: 'no-var',
      }),
      expect.objectContaining({
        ruleId: 'object-shorthand',
      }),
      expect.objectContaining({
        ruleId: 'prefer-arrow-callback',
      }),
      expect.objectContaining({
        ruleId: 'no-shadow',
      }),
      expect.objectContaining({
        ruleId: 'no-use-before-define',
      }),
      expect.objectContaining({
        ruleId: 'camelcase',
        message: "Identifier 'a_5' is not in camel case.",
      }),
      expect.objectContaining({
        ruleId: 'camelcase',
        message: "Identifier 'a_6' is not in camel case.",
      }),
      expect.objectContaining({
        ruleId: 'lines-between-class-members',
      }),
    ]),
  );
});
