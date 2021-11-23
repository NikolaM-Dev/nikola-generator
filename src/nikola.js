#!/usr/bin/env node

const { readdir } = require('fs/promises');
const path = require('path');

const inquirer = require('inquirer');

const {
  getDependencies,
  getOptions,
  intallDependecies,
  nWriteFile,
} = require('./utils');

const templatesFolderPath = path.resolve(`${__dirname}/`, 'templates');

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
  let dependencies;

  dependencies = getDependencies(technology);

  if (language === 'typescript') {
    if (technology === 'react' || technology === 'node')
      dependencies = getDependencies(`${technology}_ts`);
  }

  console.log(`Installing necessary dependencies for ${technology} 🔥`);
  intallDependecies(dependencies, packageManager);
})();
