// @ts-check

const nodeDependencies = [
  'eslint',
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

const nodeTSDependencies = [
  'eslint',
  'prettier',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

const reactDependencies = [
  'eslint',
  'prettier',
  'eslint-plugin-react',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'eslint-plugin-react-hooks',
];

const reactTSDependencies = [
  'eslint',
  'prettier',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  'eslint-plugin-react',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'eslint-plugin-react-hooks',
];

const technologies = {
  node: nodeDependencies,
  node_ts: nodeTSDependencies,
  react: reactDependencies,
  react_ts: reactTSDependencies,
  next: [''],
  nest: nodeTSDependencies,
};

/**
 * Return an array with dependencies
 * @param {string} technology
 * @returns {string[]}
 */
const getDependencies = (technology) => {
  return technologies[technology];
};

module.exports = { getDependencies };
