// @ts-check

const { exec } = require('child_process');

/**
 * Install depencies
 * @param {string[]} dependecies
 * @param {boolean} packageManager
 * @returns {void}
 */
const intallDependecies = (dependecies, packageManager) => {
  if (dependecies.length == 0) return;

  let command = packageManager ? 'yarn add -D ' : 'npm install -D ';

  dependecies.forEach((dependency) => (command += `${dependency} `));

  exec(command, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    if (error) {
      console.error(`exec error: ${error}`);

      return;
    }
    if (stderr) console.error(`stderr: ${stderr}`);
  });
};

module.exports = { intallDependecies };
