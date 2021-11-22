import inquirer from 'inquirer';

export const getOptions = async (): Promise<boolean> => {
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
