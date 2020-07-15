"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("JobCloses", "isSystemClosed", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("JobCloses", "isSystemClosed", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
};
