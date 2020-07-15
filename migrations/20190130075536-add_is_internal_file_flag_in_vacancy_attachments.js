"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("VacancyAttachments", "isInternalFile", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("VacancyAttachments", "isInternalFile", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },
};
