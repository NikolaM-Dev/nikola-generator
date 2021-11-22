import { readFile, writeFile } from 'fs/promises';

export const nWriteFile = async (file: string, path: string): Promise<void> => {
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
