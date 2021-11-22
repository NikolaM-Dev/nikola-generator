#!/usr/bin/env node
import { readdir } from 'fs/promises';
import path from 'path';

import inquirer from 'inquirer';

import {
  getDependencies,
  getOptions,
  intallDependecies,
  nWriteFile,
} from './utils';

const templatesFolderPath = path.resolve(`${__dirname}/../`, 'templates');

(async () => {
  const packageManager = await getOptions();

  const { language } = await inquirer.prompt([
    {
      type: 'list',
      message: "Pick the language you're using:",
      name: 'language',
      choices: ['typescript', 'javascript'],
    },
  ]);

  const technologies = await readdir(
    `${templatesFolderPath}/${language}`,
  ).catch(console.error);

  const { technology } = await inquirer.prompt([
    {
      type: 'list',
      message: "Pick the technology you're using:",
      name: 'technology',
      choices: technologies,
    },
  ]);

  const files = await readdir(
    `${templatesFolderPath}/${language}/${technology}`,
  ).catch(console.error);

  if (files) {
    for (const file of files) {
      await nWriteFile(
        file,
        `${templatesFolderPath}/${language}/${technology}`,
      );
    }
  }

  console.log('eslintrc successfully created 😄');
  const depencies = getDependencies(technology);

  console.log(`Installing necessary dependencies for ${technology} 🔥`);
  intallDependecies(depencies, packageManager);
})();
