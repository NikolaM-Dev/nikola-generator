// @ts-check

const { readFile, writeFile } = require('fs/promises');

/**
 *
 * @param {string} file
 * @param {string} path
 * @returns {Promise<void>}
 */
const nWriteFile = async (file, path) => {
  if (!file) {
    console.log('No files to copy');
    process.exit();
  }
  const config = await readFile(`${path}/${file}`, 'utf-8').catch((err) => {
    console.error(err);
    process.exit();
  });
  const writePath = `${process.cwd()}/${file}`;

  await writeFile(writePath, config, 'utf8').catch((err) => {
    console.log(err);
    process.exit();
  });
};

module.exports = { nWriteFile };
