"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("ComplianceProfiles", "code", {
      type: Sequelize.STRING,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("ComplianceProfiles", "code");
  },
};
