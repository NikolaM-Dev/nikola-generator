// @ts-check

const inquirer = require('inquirer');

/**
 * Return a boolean, true if use yarn, false if use node
 * @returns {Promise<boolean>}
 */
const getOptions = async () => {
  const { packageManager } = await inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'packageManager',
        message: 'Use yarn?',
        default: true,
      },
    ])
    .catch(console.error);

  return packageManager;
};

module.exports = { getOptions };
