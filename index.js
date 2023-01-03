module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'prettier',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },

  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
    'max-nested-callbacks': ['error', 3],
    'max-statements': ['warn', 10],
    'max-params': ['warn', 4],
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-depth': ['warn', 4],
    complexity: ['warn', 5],
    indent: ['error', 2],
    semi: ['error', 'always'],
  },
};
