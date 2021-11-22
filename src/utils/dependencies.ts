import { dependecy, technology } from '../types';

export const nodeDependencies: dependecy[] = [
  'eslint',
  'prettier',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

export const nodeTSDependencies: dependecy[] = [
  'eslint',
  'prettier',
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
];

export const reactDependencies: dependecy[] = [
  'eslint',
  'prettier',
  'eslint-plugin-react',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-prettier',
  'eslint-plugin-react-hooks',
];

export const reactTSDependencies: dependecy[] = [
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

const technologies: technology = {
  node: nodeDependencies,
  node_ts: nodeTSDependencies,
  react: reactDependencies,
  react_ts: reactTSDependencies,
  next: [''],
  nest: nodeTSDependencies,
};

export const getDependencies = (technology: string): dependecy[] => {
  return technologies[technology];
};
