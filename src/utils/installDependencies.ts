import { exec } from 'child_process';

import { dependecy } from '../types';
import { runCommand } from '../types/types';

export const intallDependecies = (
  dependecies: dependecy[],
  packageManager: boolean,
): void => {
  if (dependecies.length == 0) return;

  let command: string = packageManager ? runCommand.yarn : runCommand.node;

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
