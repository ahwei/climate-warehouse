'use strict';

const modelTypes = require('../src/models/organizations/organizations.modeltypes.cjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('organizations', modelTypes);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('organizations');
  },
};
