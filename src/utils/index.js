// @ts-check

const { getDependencies } = require('./dependencies');
const { getOptions } = require('./options');
const { intallDependecies } = require('./installDependencies');
const { nWriteFile } = require('./nWriteFile');

module.exports = {
  getDependencies,
  getOptions,
  intallDependecies,
  nWriteFile,
};
