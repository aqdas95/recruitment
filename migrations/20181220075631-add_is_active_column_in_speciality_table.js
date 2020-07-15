"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Specialities", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Specialities", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },
};
