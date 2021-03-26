const { ESLint } = require('eslint');

const lintFilesWithConfigFile = async (configFile, targetFiles) => {
  const eslint = new ESLint({
    overrideConfigFile: configFile,
    useEslintrc: false,
    extensions: ['.js'],
    ignore: false,
  });
  return eslint.lintFiles(targetFiles);
};

module.exports = {
  lintFilesWithConfigFile,
};
