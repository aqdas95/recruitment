"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "isPreferenceSaved", {
      type: Sequelize.BOOLEAN,
      allowNULL: true,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "isPreferenceSaved", {
      type: Sequelize.BOOLEAN,
      allowNULL: true,
      defaultValue: "false",
    });
  },
};
