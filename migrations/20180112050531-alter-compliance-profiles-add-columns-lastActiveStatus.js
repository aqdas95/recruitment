"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("ComplianceProfiles", "lastActiveStatus", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "ComplianceProfiles",
      "lastActiveStatus",
      { type: Sequelize.DATE, allowNull: true }
    );
  },
};
