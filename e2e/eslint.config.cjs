const baseConfig = require('../eslint.base.config.cjs');
const cypress = require('eslint-plugin-cypress/flat');

module.exports = [
  ...baseConfig,

  cypress.configs['recommended'],
  {
    // Override or add rules here
    rules: {},
  },
];
