const path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Specifying the version of ECMAScript syntax we are going to use
    sourceType: 'module', // Specifying type of source type which we are using either 'script(default)' or 'module'
  },
  overrides: [
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
  plugins: ['prettier'],
  extends: [
    'airbnb-base', // Set of recommended rules from Airbnb for JavaScript/React
    'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier
  ],
  // Instead of specifying eslint rules individually, we can also use pre built configurations. eslint-config-prettier : Turns off all rules that are unnecessary or might conflict with Prettier.
  rules: {
    strict: ['error', 'never'], // Check for explicit use of 'use strict'
    'no-console': 'error', // Disallows usage of console in the code
    'prettier/prettier': 'error',
    /* The below rules were included by default in eslint recommendation('eslint:recommended') */
    // "valid-typeof": "error", // Check for invalid typeof check
    // "no-unsafe-negation": "error", // Checks for unexpected negation before the left operand. Eg: if(!one === two)
    // "no-unused-vars": "error", // Checks for unused variables
    // "no-unexpected-multiline": "error", //Checks for confusing multiline expressions
    // "no-undef": "error", // Checks for usage of undeclared variables
    // "semi": "off" //Disables mandatory for semi-colons at the end of the statement
  },
  env: {
    node: true,
    commonjs: true,
    jest: true,
    es6: true,
    es2020: true,
  },
}
