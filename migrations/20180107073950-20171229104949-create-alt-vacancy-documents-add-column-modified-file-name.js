"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("VacancyAttachments", "modifiedFileName", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "VacancyAttachments",
      "modifiedFileName"
    );
  },
};
