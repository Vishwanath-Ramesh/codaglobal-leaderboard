const path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, //Specifying the version of ECMAScript syntax we are going to use
    sourceType: 'module', // Specifying type of source type which we are using either 'script(default)' or 'module'
    ecmaFeatures: {
      //Specifying additional language features we are using
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  overrides: [
    {
      files: ['**/src/**'],
      settings: { 'import/resolver': 'webpack' },
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
  ],
  // Instead of specifying eslint rules individually, we can also use pre built configurations. eslint-config-prettier : Turns off all rules that are unnecessary or might conflict with Prettier.
  rules: {
    strict: ['error', 'never'], // Check for explicit 'use strict'
    'no-console': 'error', // Disallows console in the code
    // "valid-typeof": "error", // Check for invalid typeof check
    // "no-unsafe-negation": "error", // Checks for unexpected negation before the left operand. Eg: if(!one === two)
    // "no-unused-vars": "error", // Checks for unused variables
    // "no-unexpected-multiline": "error", //Checks for confusing multiline expressions
    // "no-undef": "error", // Checks for usage of undeclared variables
    // "semi": "off" //Disables mandatory for semi-colons at the end of the statement
  },
  env: {
    browser: true, // Set the environment as browser or not
    node: true,
    commonjs: true,
    jest: true,
    es6: true,
  },
}

/*
Notes:
    - Press ctrl+. to get the possible options for eslint errors
    - To automatically fix eslint error, run npm eslint . --fix
*/
