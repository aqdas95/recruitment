"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },
};
