import { Dependecy, Technology } from '../types';

export const nodeDependencies: Dependecy[] = [
  'eslint',
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

export const nodeTSDependencies: Dependecy[] = [
  'eslint',
  'prettier',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

export const reactDependencies: Dependecy[] = [
  'eslint',
  'prettier',
  'eslint-plugin-react',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'eslint-plugin-react-hooks',
];

export const reactTSDependencies: Dependecy[] = [
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

export const angularDependecies: Dependecy[] = [
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

const technologies: Technology = {
  node: nodeDependencies,
  node_ts: nodeTSDependencies,
  react: reactDependencies,
  react_ts: reactTSDependencies,
  next: [''],
  nest: nodeTSDependencies,
  angular: angularDependecies,
};

export const getDependencies = (Technology: string): Dependecy[] => {
  return technologies[Technology];
};
